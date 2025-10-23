function countJourneys(logs) {
  // Track active journeys per car
  const active = new Set(); // cars currently on highway
  const journeyCount = new Map(); // car -> number of complete journeys

  for (const line of logs) {
    const parts = line.trim().split(/\s+/);
    if (parts.length < 4) continue; // invalid line
    const [timestamp, plate, mile, type] = parts;
    const boothType = type.toUpperCase();

    if (boothType === "ENTRY") {
      // start a journey
      active.add(plate);
    } else if (boothType === "EXIT") {
      if (active.has(plate)) {
        // complete journey
        journeyCount.set(plate, (journeyCount.get(plate) || 0) + 1);
        active.delete(plate);
      } else {
        // should not happen in this scenario
        console.warn(`EXIT without ENTRY: ${plate}`);
      }
    }
    // MAINROAD does not affect counting
  }

  return journeyCount;
}

const logs = [
  "90750.191 JOX304 250E ENTRY",
  "91081.684 JOX304 260E MAINROAD",
  "91082.101 THX138 110E ENTRY",
  "91483.251 JOX304 270E MAINROAD",
  "91873.920 THX138 120E MAINROAD",
  "91874.493 JOX304 280E EXIT",
  "91982.102 THX138 290E EXIT"
];

console.log(countJourneys(logs));
// Output: Map { 'JOX304' => 1, 'THX138' => 1 }

