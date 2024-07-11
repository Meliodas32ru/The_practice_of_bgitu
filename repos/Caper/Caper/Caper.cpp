#include <iostream>
#include <fstream>
#include <string>

using namespace std;

char** grid;

struct Point
{
	int x = 0;
	int y = 0;
	bool isSet = false;
};

Point* pos;

void SetCountMine(int numRows, int numCols, int& s) {

	int size = 0;

	for (int i = 0; i < numRows; i++)
		for (int j = 0; j < numCols; j++)
			if (grid[i][j] == '*')
				size++;

	pos = new Point[size];
	int k = 0;
	for (int i = 0; i < numRows; i++)
		for (int j = 0; j < numCols; j++)
			if (grid[i][j] == '*') {
				pos[k].y = i;
				pos[k++].x = j;
			}
	s = size;
}

void ReadCharArray(int numRows, int numCols, ifstream& infile) {
	string line;
	for (int i = 0; i < numRows; i++) {
		getline(infile, line);
		for (int j = 0; j < numCols; j++)
			grid[i][j] = line[j];
	}
}

void SetPoint(int x, int y, int s, int& c) {

	if (grid[x][y] == 'z' || (grid[x][y] != '*' && grid[x][y] != '0'))
		return;

	for (int i = 0; i < s; i++)
	{
		if (pos[i].x == x && pos[i].y == y) {
			pos[i].isSet = true;
			c++;
			break;
		}
	}
	grid[x][y] = 'z';
}

void ResetPoint(int x, int y, int s, int& c) {

	if (grid[x][y] != 'z')
		return;

	bool flag = false;

	for (int i = 0; i < s; i++)
	{
		if (pos[i].x == x && pos[i].y == y && pos[i].isSet) {
			pos[i].isSet = false;
			flag = true;
			c--;
			grid[x][y] = '*';
			break;
		}
	}
	if (!flag)
		grid[x][y] = '0';
}

void WhiteGrid(int numRows, int numCols)
{
	for (int i = 0; i < numRows; i++)
	{
		for (int j = 0; j < numCols; j++)
		{
			if (grid[i][j] == '*')
				cout << "- ";
			else if (grid[i][j] == '0')
				cout << "- ";
			else if (grid[i][j] == '9')
				cout << "0 ";
			else
				cout << grid[i][j] << " ";
		}
		cout << "\n";
	}
}

int Detect(int x, int y, int s) {
	if (grid[x][y] == '*')return 1;

	if (grid[x][y] == 'z') {
		for (size_t i = 0; i < s; i++)
		{
			if (pos[i].x == x && pos[i].y == y && pos[i].isSet) {
				return 1;
			}
		}
		grid[x][y] = '0';
	}
	return 0;
}

void GeneratNumber(int x, int y, int mX, int mY, int s)
{
	if (grid[x][y] != '0')
		return;

	int s1 = 0;

	if (x + 1 < mX)
		s1 += Detect(x + 1, y, s);
	if (y + 1 < mY)
		s1 += Detect(x, y + 1, s);
	if (x - 1 >= 0)
		s1 += Detect(x - 1, y, s);
	if (y - 1 >= 0)
		s1 += Detect(x, y - 1, s);

	if (x + 1 < mX && y + 1 < mY)
		s1 += Detect(x + 1, y + 1, s);
	if (x + 1 < mY && y - 1 >= 0)
		s1 += Detect(x + 1, y - 1, s);
	if (x - 1 >= 0 && x + 1 < mX)
		s1 += Detect(x - 1, y + 1, s);
	if (x - 1 >= 0 && y - 1 >= 0)
		s1 += Detect(x - 1, y - 1, s);

	if (s1 == 0)
	{
		grid[x][y] = '9';

		if (x + 1 < mX)
			GeneratNumber(x + 1, y, mX, mY, s);
		if (y + 1 < mY)
			GeneratNumber(x, y + 1, mX, mY, s);
		if (x - 1 >= 0)
			GeneratNumber(x - 1, y, mX, mY, s);
		if (y - 1 >= 0)
			GeneratNumber(x, y - 1, mX, mY, s);
		if (x + 1 < mX && y + 1 < mY)
			GeneratNumber(x + 1, y + 1, mX, mY, s);
		if (x + 1 < mY && y - 1 >= 0)
			GeneratNumber(x + 1, y - 1, mX, mY, s);
		if (x - 1 >= 0 && x + 1 < mX)
			GeneratNumber(x - 1, y + 1, mX, mY, s);
		if (x - 1 >= 0 && y - 1 >= 0)
			GeneratNumber(x - 1, y - 1, mX, mY, s);
	}
	else
		grid[x][y] += s1;
}

void main() {
	setlocale(LC_ALL, "rus");
	system("color F1");

	int numRows = 5;
	int numCols = 5;
	int size = 0;
	int c = 0;

	bool isFinish = false;

	grid = new char* [numRows];
	for (int i = 0; i < numRows; i++) {
		grid[i] = new char[numCols];
	}

	string filename = "mine_locations.txt";
	ifstream infile;
	infile.open(filename);

	ReadCharArray(numRows, numCols, infile);

	infile.close();
	SetCountMine(numRows, numCols, size);
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// . - 12345678 z

	WhiteGrid(numRows, numCols);
	int x, y, n;

	while (true)
	{
		cout << "Введите: \n1 - если хотите просто выбрать точку \n2 - если хотите поставить отметку \n3 - если хотите убрать метку\nлюбая другая клавиша - выход из игры\n";
		cin >> n;

		cin >> x >> y;
		x--; y--;
		switch (n)
		{
		case 2:
			SetPoint(x, y, size, c);
			if (c == size)
				isFinish = true;
			break;
		case 1:
			if (grid[x][y] == '*' && grid[x][y] != 'z') {
				cout << "Вы попали на мину \n";
				isFinish = true;
				break;
			}
			if (grid[x][y] == 'z')
				break;
			GeneratNumber(x, y, numRows, numCols, size);
		case 3:
			ResetPoint(x, y, size, c);
			break;
		default:
			isFinish = true;
			break;
		}

		if (isFinish)
			break;
		WhiteGrid(numRows, numCols);
	}

	for (int i = 0; i < numRows; i++)
		delete[] grid[i];
	delete[] grid;

	return;
}