#include <iostream>

using namespace std;

class String {
private:
	char* _str;
	int _size;

public:
	String()
	{
		_str = new char[1];
		_str[0] = '\0';
		_size = 0;
	}

	String(const char* value)
	{
		_size = strlen(value);
		_str = new char[_size + 1];
		char* new_str = new char[_size + 1];
		for (int i = 0; i < _size; i++)
			new_str[i] = value[i];
		_str = new_str;
		_str[_size] = '\0';
	}

	String(String* string)
	{
		_size = string->_size;
		_str = string->_str;
	}

	~String() {
		delete _str;
	}

	char* GetValue() {
		return _str;
	}

	int GetSize() {
		return _size;
	}

	void Add(char c) {
		char* new_str = new char[_size + 2];
		for (int i = 0; i < _size; i++)
			new_str[i] = _str[i];
		new_str[_size] = c;
		new_str[_size + 1] = '\0';

		delete _str;
		_str = new_str;
		_size++;
	}

	void Clear() {
		delete _str;
		_str = nullptr;
		_size = 0;
	}
};

int main() {
	String str1 = new String();
	std::cout << "Конструктор по умолчанию str1 - значение: " << str1.GetValue() << " размер " << str1.GetSize() << "\n";

	String str2("Привет, мир!\0");
	std::cout << "Конструктор с параметром str2 - значение: " << str2.GetValue() << " размер " << str2.GetSize() << "\n";

	String str3 = str2;
	std::cout << "Конструктор копирования str3 - значение: " << str3.GetValue() << " размер " << str3.GetSize() << "\n\n";

	std::cout << "Метод str1.get_value() : " << str1.GetValue() << "\n";
	std::cout << "Метод str2.get_value() : " << str2.GetValue() << "\n";
	std::cout << "Метод str3.get_value() : " << str3.GetValue() << "\n\n";

	std::cout << "Метод str1.get_size(): " << str1.GetSize() << "\n";
	std::cout << "Метод str2.get_size(): " << str2.GetSize() << "\n";
	std::cout << "Метод str3.get_size(): " << str3.GetSize() << "\n\n";

	str1.Add('F');
	std::cout << "Метод str1.put('F') - значение: " << str1.GetValue() << " размер " << str1.GetSize() << "\n";

	str2.Add('F');
	std::cout << "Метод str2.put('F') - значение: " << str2.GetValue() << " размер " << str2.GetSize() << "\n\n";

	str2.Clear();
	std::cout << "Метод str2.clear() - значение: " << str2.GetValue() << " размер " << str2.GetSize() << "\n";

	return 0;
}