#include "kingsort.h"

KingSort::KingSort(std::list<string>* l){
    this->lista = l;
}

int KingSort::romanoToInt(string s){

    enum algs { I = 1, V = 5, X = 10, L = 40 };

    int inteiro = 0;
    for (int i = 0; i < s.size(); i++){
       switch (s[i]){
         case 'L':
            if(i > 0 && s[i - 1] == 'X')
                inteiro += 20;
            else
                inteiro += L;
         case 'X': inteiro += X; break;
         case 'V': inteiro += V; break;
         case 'I':
             if (s[i + 1] != 'I' && i + 1 != s.size())
                 inteiro -= 1;
             else
                 inteiro += 1;
             break;
        }
    }

    return inteiro;
}

bool KingSort::sort(const string& A, const string& B){

      short espaco = A.find(" ",0);

      unsigned short i=0;

      while (i<espaco && i<B.length()){
            if (A[i]<B[i]) return true;
            else if (A[i]>B[i]) return false;
            ++i;
      } //NOME IGUAL, CHECAR ROMANO

      return (romanoToInt(A.substr(espaco + 1,A.size())) < romanoToInt(B.substr(espaco + 1,B.size())));
}

std::list<string>* KingSort::getSortedList(){

    lista->sort(sort);

    return this->lista;
}
