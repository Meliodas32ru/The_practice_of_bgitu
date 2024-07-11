#include <iostream>
#include <string>
#include <unordered_map>

class AutoOwnerDirectory {
private:
    std::unordered_map<std::string, std::string> directory; // номер_автомобиля -> имя_владельца

public:
    void addEntry(const std::string& ownerName, const std::string& carNumber) {
        directory[carNumber] = ownerName;
    }

    void removeEntry(const std::string& carNumber) {
        directory.erase(carNumber);
    }

    std::string findOwnerName(const std::string& carNumber) {
        if (directory.find(carNumber) != directory.end()) {
            return directory[carNumber];
        }
        else {
            return "Информация не найдена";
        }
    }

    void editOwnerName(const std::string& carNumber, const std::string& newOwnerName) {
        if (directory.find(carNumber) != directory.end()) {
            directory[carNumber] = newOwnerName;
        }
    }

    void editCarNumber(const std::string& currentCarNumber, const std::string& newCarNumber) {
        if (directory.find(currentCarNumber) != directory.end()) {
            std::string ownerName = directory[currentCarNumber];
            directory.erase(currentCarNumber);
            directory[newCarNumber] = ownerName;
        }
    }
};

int main() {
    AutoOwnerDirectory directory;

    directory.addEntry("Иванов", "A123BC");
    directory.addEntry("Петров", "X456YZ");

    std::cout << "Имя владельца автомобиля A123BC: " << directory.findOwnerName("A123BC") << std::endl;

    directory.editOwnerName("A123BC", "Сидоров");
    std::cout << "Имя владельца автомобиля A123BC после редактирования: " << directory.findOwnerName("A123BC") << std::endl;

    directory.editCarNumber("X456YZ", "M777OP");
    std::cout << "Имя владельца автомобиля с номером M777OP: " << directory.findOwnerName("M777OP") << std::endl;

    directory.removeEntry("A123BC");
    std::cout << "Имя владельца автомобиля A123BC после удаления: " << directory.findOwnerName("A123BC") << std::endl;

    return 0;
}
