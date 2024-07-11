#include "iostream"
#include "stdio.h"
#include "string.h"
#include "conio.h"
#include "windows.h"
using namespace std;
char buffalpha[34] = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
void main()
{
	(1251);
	SetConsoleOutputCP(1251);
	int j, x, y, rr, k = 3;
	char buff[100] = "";
	puts("Выберите действие :\n");
	puts("1.Шифрование\n");
	puts("2.Дешифрование\n");
	scanf_s("%i", &rr);
	while (rr == 1)
	{
		cout << "Введете сообщение для шифрования:" << endl;
		cin >> buff;
		for (int i = 0; i < strlen(buff); i++)
		{
			for (int l = 0; l < strlen(buffalpha); l++)
				if (buff[i] == buffalpha[l]) {
					x = l;
					j = (x + k) % (strlen(buffalpha));
					buff[i] = buffalpha[j];
				}
		}
		cout << "Зашифрованное сообщение:\n" << endl;
		cout << buff << endl; system("break");
	}
	{
		cout << "Введите сообщение для дешифрования:" << endl;
		cin >> buff;
		cout << "Дешифрованное собщение: " << endl;
		for (int i = 0; i < strlen(buff); i++)
		{
			for (int l = 0; l < strlen(buffalpha); l++)
				if (buff[i] == buffalpha[l]) {
					y = l;
					j = ((y + (strlen(buffalpha)) - (k % (strlen(buffalpha))))) % (strlen(buffalpha));
					buff[i] = buffalpha[j];
				}
		}
		cout << buff << endl;
		system("break");
	}
	_getch();
}