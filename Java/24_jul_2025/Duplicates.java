import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class Duplicates {
    public static void main(String[] args) {
        String s="Hello this is praveen Hello";

        String[] starr=s.split(" ");

        System.out.println(Arrays.toString(starr));

             Set<String> sst = new HashSet<>(Arrays.asList(starr));
        System.out.println(sst);

        Iterator itStar= sst.iterator();

        while(itStar.hasNext()){
            System.out.println(itStar.next());
        }
    }
}
