#include <iostream>

using namespace std;

class Kilometer {
private:
	float _km;
public:
	Kilometer(float km) {
		_km = km;
	}

	Kilometer& operator = (Kilometer* other) {
		_km = other->_km;
		return *this;
	}
	Kilometer& operator += (float value) {
		_km += value;
		return *this;
	}
	bool operator > (float value) {
		return _km > value;
	}
	bool operator >= (float value) {
		return _km >= value;
	}
	bool operator == (float value) {
		return _km == value;
	}

	Kilometer operator ++ () {
		++_km;
		return *this;
	}

	Kilometer operator ++ (int) {
		Kilometer temp = *this;
		++_km;
		return temp;
	}

	Kilometer operator -- () {
		--_km;
		return *this;
	}

	Kilometer operator--(int) {
		Kilometer temp = *this;
		--_km;
		return temp;
	}

	Kilometer operator + (float value) {
		return _km + value;
	}

	Kilometer operator-(float value) {
		return _km - value;
	}

	float ToMile() {
		return _km * 1.60934;
	}

	float GetKilometers() {
		return _km;
	}
};

class Mile {
private:
	float _miles;
public:
	Mile(float mi) : _miles(mi) {}

	Mile& operator=(const Mile& other) {
		_miles = other._miles;
		return *this;
	}

	Mile operator++() {
		++_miles;
		return *this;
	}

	Mile operator++(int) {
		Mile temp = *this;
		++_miles;
		return temp;
	}

	Mile operator-(float value) {
		return _miles - value;
	}
	Mile operator-(int) {
		Mile temp = *this;
		--_miles;
		return temp;
	}
	Mile operator-=(float value) {
		return _miles -= value;
	}
	bool operator<(float value) {
		return _miles < value;
	}
	bool operator<=(float value) {
		return _miles <= value;
	}
	bool operator!=(float value) {
		return _miles != value;
	}

	Mile operator--(int) {
		Mile temp = *this;
		--_miles;
		return temp;
	}
	Mile operator--() {
		--_miles;
		return *this;
	}

	double ToKilometers() const {
		return _miles * 1.60934;
	}

	operator Kilometer() const {
		return Kilometer(ToKilometers());
	}

	double GetMiles() const {
		return _miles;
	}
};

int main() {
	Kilometer kilometer1(10);
	cout << "Kilometer(" << kilometer1.GetKilometers() << ")\n";
	cout << " kilometers + 5 -> Kilometer(" << (kilometer1 + 5).GetKilometers() << ")\n";
	cout << " kilometers += 5 -> Kilometer(" << (kilometer1 += 5).GetKilometers() << ")\n";
	cout << " ++kilometers -> Kilometer(" << (++kilometer1).GetKilometers() << ")\n";
	cout << " kilometers++ -> Kilometer(" << (kilometer1++).GetKilometers() << ")\n";
	cout << "Kilometer(" << kilometer1.GetKilometers() << ")\n";
	cout << " --kilometers -> Kilometer(" << (--kilometer1).GetKilometers() << ")\n";
	cout << " kilometers>5 -> =" << (kilometer1 > 5) << ")\n";
	cout << " kilometers>=11 -> =" << (kilometer1 >= 11) << ")\n";
	cout << " kilometers==11 -> =" << (kilometer1 == 11) << ")\n\n\n";

	Mile mile1(6.14f);
	cout << "Mile(" << mile1.GetMiles() << ") miles - 5 Mile(" << (mile1 - 5).GetMiles() << ")\n";
	cout << "Mile(" << mile1.GetMiles() << ")\n";
	cout <<  "miles -= 5 Mile(" << (mile1 -= 5).GetMiles() << ")\n";
	cout << "Mile(" << mile1.GetMiles() << ")\n";
	cout <<" --miles Mile(" << (--mile1).GetMiles() << ")\n";
	cout << "Mile(" << mile1.GetMiles() << ")\n";
	cout << " ++miles Mile(" << (++mile1).GetMiles() << ")\n";
	cout << "Mile(" << mile1.GetMiles() << ")\n";
	cout << "miles-- Mile(" << (mile1--).GetMiles() << ")\n";
	cout << "Mile(" << mile1.GetMiles() << ")\n";
	cout << "Mile(" << mile1.GetMiles() << ") miles<3 =>" << (mile1 < 3) << "\n";
	cout << "Mile(" << mile1.GetMiles() << ") miles<=3 =>" << (mile1 <= 3) << "\n";
	cout << "Mile(" << mile1.GetMiles() << ") miles!=5 =>" << (mile1 != 5) << "\n";
	cout << "Mile(" << mile1.GetMiles() << ") miles to kilometers => Kilometer("<< mile1.ToKilometers()<<")\n";

	Mile m2 = kilometer1+mile1;

	return 0;
}