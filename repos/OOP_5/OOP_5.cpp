#include <iostream>
#include <string>

template <class T>
struct Node {
    T data;
    Node* next;

    Node(T value) : data(value), next(nullptr) {}
};

template <class T>
class LinkedList {

private:
    Node<T>* head;

public:
    LinkedList() : head(nullptr) {}

    void Add(T value) {
        Node<T>* newNode = new Node<T>(value);
        if (head == nullptr) {
            head = newNode;
        }
        else {
            Node<T>* temp = head;
            while (temp->next != nullptr) {
                temp = temp->next;
            }
            temp->next = newNode;
        }
    }
    void Display() {
        Node<T>* temp = head;
        while (temp != nullptr) {
            std::cout << temp->data << " ";
            temp = temp->next;
        }
        std::cout << std::endl;
    }

    T GetNode(int index) {
        Node<T>* temp = head;
        for (int i = 0; i < index; i++) {
            if (temp == nullptr) {
                throw "Index out of bounds";
            }
            temp = temp->next;
        }
        return temp->data;
    }

    int Search(T value) {
        Node<T>* temp = head;
        int index = 0;
        while (temp != nullptr) {
            if (temp->data == value) {
                return index;
            }
            temp = temp->next;
            index++;
        }
        return -1;
    }

    void RemoveFirst() {
        if (head != nullptr) {
            Node<T>* temp = head;
            head = head->next;
            delete temp;
        }
    }

    void RemoveLast() {
        if (head != nullptr) {
            if (head->next == nullptr) {
                delete head;
                head = nullptr;
            }
            else {
                Node<T>* temp = head;
                while (temp->next->next != nullptr) {
                    temp = temp->next;
                }
                delete temp->next;
                temp->next = nullptr;
            }
        }
    }

    void RemoveNode(int index) {
        if (index == 0) {
            RemoveFirst();
        }
        else {
            Node<T>* temp = head;
            for (int i = 0; i < index - 1; i++) {
                if (temp == nullptr) {
                    return;
                }
                temp = temp->next;
            }
            if (temp != nullptr && temp->next != nullptr) {
                Node<T>* toDelete = temp->next;
                temp->next = temp->next->next;
                delete toDelete;
            }
        }
    }
};

int main() {
    // Пример использования шаблонного класса LinkedList
    LinkedList<int> list;
    list.Add(6);
    list.Add(3);
    list.Add(8);
    list.Add(1);
    list.Add(5);
    list.Display();

    std::cout << "Узел с индексом 3: " << list.GetNode(3) << std::endl;
    std::cout << "Поиск в узлах значения 1: " << list.Search(1) << std::endl;

    list.RemoveFirst();
    list.Display();

    list.RemoveLast();
    list.Display();

    list.RemoveNode(2);
    list.Display();

    return 0;
}