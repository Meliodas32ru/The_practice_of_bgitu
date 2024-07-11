#include <iostream>
#include <string>
#include <random>

class Person {
protected:
    std::string name;
    int experience;
    int age;

public:
    Person(std::string n, int exp, int a) : name(n), experience(exp), age(a) {}

    virtual bool Shoot() = 0;
};

class Junior : public Person {
public:
    Junior(std::string n, int exp, int a) : Person(n, exp, a) {}

    bool Shoot() override {
        float probability = 0.01 * experience;
        probability *= 200;
        float rd = rand() % 110;
        std::cout << "User(name: " << name << "; experience: " << experience << "; age: " << age << "; type: Junior;) ";
        if (rd < probability) {
            std::cout << "Попал\n";
            return true;
        }
        else {
            std::cout << "Не попал\n";
            return false;
        }
    }
};

class Middle : public Person {
public:
    Middle(std::string n, int exp, int a) : Person(n, exp, a) {}

    bool Shoot() override {
        float probability = 0.05 * experience;
        probability *= 200;
        float rd = rand() % 110;
        std::cout << "User(name: " << name << "; experience: " << experience << "; age: " << age << "; type: Middle;) ";
        if (rd < probability) {
            std::cout << "Попал\n";
            return true;
        }
        else {
            std::cout << "Не попал\n";
            return false;
        }
    }
};

class Senior : public Person {
public:
    Senior(std::string n, int exp, int a) : Person(n, exp, a) {}

    bool Shoot() override {
        float probability = 0.7 - 0.01 * age;
        probability *= 200;
        float rd = rand() % 110;
        std::cout << "User(name: " << name << "; experience: " << experience << "; age: " << age << "; type: Senior;) ";
        if (rd < probability) {
            std::cout << "Попал\n";
            return true;
        }
        else {
            std::cout << "Не попал\n";
            return false;
        }
    }
};

int main() {
    Junior artem("Артём", 1, 21);
    Junior novice1("Новичок1", 3, 20);
    Junior novice2("Новичок2", 2, 22);
    Middle oleg("Олег", 4, 31);
    Middle dmitriy("Дмитрий", 5, 18);
    Middle maria("Мария", 2, 19);
    Senior grigoriy("Григорий", 7, 65);

    bool shotFired = false;
    Person* people[] = { &artem, &novice1, &novice2, &oleg, &dmitriy, &maria, &grigoriy };
    for (auto person : people) {
        if (person->Shoot()) {
            shotFired = true;
            break;
        }
    }

    if (!shotFired)
        std::cout << "Никто не попал" << std::endl;

    return 0;
}
