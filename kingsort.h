#ifndef KINGSORT_H
#define KINGSORT_H

#include <string>
#include <list>

using namespace std;

#define TAMANHO 50

class KingSort{
public:
    KingSort(std::list<string>* l);

    static bool sort(const string& A, const string& B);
    std::list<string>* getSortedList();

    static int romanoToInt(string s);

private:
    list<string>* lista;
};

#endif // KINGSORT_H
