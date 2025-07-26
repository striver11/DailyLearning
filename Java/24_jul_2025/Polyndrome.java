public class Polyndrome {
    public static void main(String[] args){
        String a="MOM";
        
        char[] c = a.toCharArray();
        String b="";
        for(int i=a.length()-1;i>=0;i--)
        {
            b = b + c[i];
        }
        
        if(a.equals(b)){
            System.out.println("ployndrome");
        }
        else{
            System.out.println("not a ployndrome");
        }


        String x="";
        for(int i=0;i<a.length();i++){
            x=a.charAt(i)+x;
        }

        System.out.println(x);
           if(a.equals(x)){
            System.out.println("ployndrome");
        }
        else{
            System.out.println("not a ployndrome");
        }

    }
}
