package terceirodesafio;

import java.util.*;

public class TerceiroDesafio {

    static ArrayList<String> palavrasRestantes;
    
    static String[] crosswordPuzzle(String[] crossword, String hints) {
        
        String[] palavras = hints.split(";"); 
        palavrasRestantes = new ArrayList<>(Arrays.asList(palavras));
            
        //CONVERTER CADA String da tabela para array
        char[][] tabela = new char[10][10];
        for(int i = 0; i < 10; i++)
            tabela[i] = crossword[i].toCharArray();
        
        //ITERA POR TODA A MATRIZ
        for(int y = 0; y < 10; y++){
            for(int x = 0; x < 10; x++){
                if(tabela[y][x] == '-'){
                    //VERIFICA SE A LACUNA ESTA NA HORIZONTAL OU VERTICAL
                    if(y - 1 >= 0 && tabela[y - 1][x] == '-'){ // != '+'
                        //VERTICAL - Verificar tamanho lacuna
                        int inicio = y - 1, fim = y;
                        while(inicio > 0 && tabela[inicio - 1][x] != '+') inicio --;
                        while(fim < tabela.length - 1 && tabela[fim + 1][x] != '+') fim ++;
                            
                        System.out.println("X = " + x + " Y (" + inicio + "," + fim + ") - VERTICAL");
                        
                        //ENCAIXA PALAVRA
                        vertical:
                        for(String s : palavrasRestantes){
                            if(s.length() == fim - inicio + 1){
                                
                                for(int i = 0;i<s.length(); i++){ //VERIFICA REGULARIDADE
                                    if(tabela[inicio + i][x] != '-' && s.charAt(i) != tabela[inicio + i][x])
                                        break vertical;
                                }
                                                    
                                char[] tmp = s.toCharArray();
                                for(int i = 0;i< tmp.length; i++){
                                    tabela[inicio + i][x] = s.charAt(i);
                                }
                                palavrasRestantes.remove(s);
                                break;
                            }
                        }
                    }
                    
                    if(x - 1 >= 0 && tabela[y][x-1] == '-'){
                        //HORIZONTAL
                        int inicio = x - 1, fim = x;
                        while(inicio > 0 && tabela[y][inicio - 1] != '+') inicio --;
                        while(fim < tabela.length - 1 && tabela[y][fim + 1] != '+') fim ++;
                            
                        System.out.println("X (" + inicio + "," + fim + ")" + " Y = " + y + " - HORIZONTAL");
                    
                        //ENCAIXA PALAVRA
                        horizontal:
                        for(String s : palavrasRestantes){
                            if(s.length() == fim - inicio + 1){
                                
                                for(int i = 0;i<s.length(); i++){ //VERIFICA REGULARIDADE
                                    if(tabela[y][inicio + i] != '-' && s.charAt(i) != tabela[y][inicio + i])
                                        break horizontal;     
                                }
                                
                                char[] tmp = s.toCharArray();
                                for(int i = 0;i< tmp.length; i++){
                                    tabela[y][inicio + i] = s.charAt(i);
                                }
                                palavrasRestantes.remove(s);
                                break;
                            }
                        } 
                    }
                }
            }
        }
        
        if(palavrasRestantes.isEmpty()) {
            String[] solucao = new String[10];
            for(int i = 0;i<10;i++)
                solucao[i] = new String(tabela[i]);

            return solucao;
        }
                    
        /*  NÃO ENCAIXOU. RESETA TUDO

            IMPORTANTE: SE SEGUISSE AS ENTRADAS DEFINIDAS NO ENUNCIADO O CÓDIGO A SEGUIR SERIA DESNECESSÁRIO.
            RESOLVI INCLUIR ESSA PARTE PARA CASO A ORDEM DA ENTRADA DAS PALAVRAS SEJA DIFERENTE. POR EXEMPLO:

            LONDON;DELHI;ICELAND;ANKARA
            ANKARA;DELHI;LONDON;ICELAND
        */
        List<String> tmp = new ArrayList<>(Arrays.asList(palavras));
        Collections.shuffle(tmp);
        String str = "";
        for(int i = 0;i<palavras.length;i++){
            str += tmp.get(i);
            if(i != palavras.length - 1) str += ";";
        }
        return crosswordPuzzle(crossword, str); 
    }
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String[] crossword = new String[10];
        for(int crossword_i = 0; crossword_i < 10; crossword_i++){
            crossword[crossword_i] = in.next();
        }

        String hints = in.next();
        String[] result = crosswordPuzzle(crossword, hints);
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i] + (i != result.length - 1 ? "\n" : ""));
        }
        System.out.println("");

        in.close();
    }
}
