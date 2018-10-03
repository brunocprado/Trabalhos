#include <iostream>
#include <kingsort.h>
#include <list>
#include <string>

using namespace std;

int main(){

    std::list<string>* lista = new list<string>({
        "Louis IX",
        "Philippe II",
        "John V",
        "Louis VIII",
        "John X",
        "Charles VI",
        "Richard L",
        "Richard X",
        "Jean II",
        "Louis VII",
        "Charles V"
    });

    for (list<string>::iterator i= lista->begin(); i != lista->end(); ++i)
        std::cout << *i << "\n";

    KingSort* sort = new KingSort(lista);

    cout << "==========================\n";

    for (list<string>::iterator i= sort->getSortedList()->begin(); i != sort->getSortedList()->end(); ++i)
        std::cout << *i << "\n";

    return 1;
}
