#include <iostream>
#include <cmath>
using namespace std;

class Figure {
public:
	virtual void Print() {
		cout << "Figure\n";
	}
};

class Point : public Figure {

public:
	int X;

	Point(int x) {
		X = x;
	}

	void Print() override {
		cout << "Point coordinate: " << X << "\n";
	}

	float Distance(Point& p) {
		return abs(p.X - X);
	}
};

class Point2D : public Point {

public:
	int Y;
	Point2D(int x, int y) : Point(x) {
		Y = y;
	}

	void Print() override {
		cout << "Point2D: (" << X << ", " << Y << ")\n";
	}

	double Distance(Point2D& p) const {
		return sqrt(pow(p.X - X, 2) + pow(p.Y - Y, 2));
	}
};

class Point3D : public Point2D {

public:
	int Z;
	Point3D(int x, int y, int z) : Point2D(x, y) {
		Z = z;
	}

	void Print() override {
		cout << "Point3D: (" << X << ", " << Y << ", " << Z << ")\n";
	}
	double Distance(Point3D& p) const {
		return sqrt(pow(p.X - X, 2) + pow(p.Y - Y, 2) + pow(p.Z - Z, 2));
	}
};

class Section : public Figure {

public:
	Point3D P1, P2;
	Section(Point3D& p1, Point3D& p2) : P1(p1), P2(p2) {}

	void Print() override {
		cout << "\nSection: \n";
		P1.Print();
		P2.Print();
		cout << "Distancy: " << P1.Distance(P2) << "\n";
	}
};

class PlaneFigure : public Figure {
public:
	virtual float Area() = 0;
};

class Triangle : public PlaneFigure {
private:
	Point3D _a, _b, _c;

public:
	Triangle(Point3D& a, Point3D& b, Point3D& c) : _a(a), _b(b), _c(c) {}

	virtual float Area() override{
		return 0.5 * abs((_a.X - _c.X) * (_b.Y - _a.Y) - (_a.X - _b.X) * (_c.Y - _a.Y));
	}

	float Height(Point3D& p1, Point3D& p2) {
		float s = Area();
		return 2 * s / p1.Distance(p2);
	}

	void Print() override {
		cout << "Triangle: \n";
		_a.Print();
		_b.Print();
		_c.Print();
		cout << "Area: " << Area() << ", Height: (" << Height(_a, _b) << ", " << Height(_a, _c) << ", " << Height(_b, _c) << ")\n\n";
	}
};

class Tetragon : public PlaneFigure {
private:
	Point3D _p1, _p2, _p3, _p4;

public:
	Tetragon(Point3D& s1, Point3D& s2, Point3D& s3, Point3D& s4) : _p1(s1), _p2(s2), _p3(s3), _p4(s4) {}

	float Area() override {
		Triangle t1(_p1, _p2, _p4);
		Triangle t2(_p2, _p3, _p4);
		return t1.Area() + t2.Area();
	}

	void Print() override {
		cout << "Tetragon: \n";
		_p1.Print();
		_p2.Print();
		_p3.Print();
		_p4.Print();
		cout << "\nArea: " << Area() << endl;
	}
};

int main() {
	Point3D p3d(-3, -5, 0);
	Point3D p3d2(4, -2, 0);
	Point3D p3d3(10, 8, 0);
	Triangle triangle1(p3d, p3d2, p3d3);
	triangle1.Print();

	Point3D p3d4(-3, -8, -8);
	Point3D p3d5(4, -2, -1);
	Point3D p3d6(10, 8, 5);
	Triangle triangle2(p3d4, p3d5, p3d6);
	triangle2.Print();

	Point3D p3d7(-2, 2, 0);
	Point3D p3d8(2, 4, 0);
	Section s1(p3d7, p3d8);
	s1.Print();

	Point3D p3d9(3, 6, 0);
	Point3D p3d10(-4, 6, 0);
	Tetragon tetragon(p3d7, p3d8, p3d9, p3d10);
	tetragon.Print();

	return 0;
}