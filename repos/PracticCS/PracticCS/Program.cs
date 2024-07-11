using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PracticCS
{
    class Program
    {
        private static void Main(string[] args)
        {
            int countSum = Int();
            Func<double, double> fn = null;

            if (countSum <= 1)
            {
                Console.WriteLine("Выберите операцию:\n1= a^x \n2=x^a \n3=Log a X \n4=sin/cos/tg/ctg x");

                int oper = Int();
                double k = Double("Введите коэффициэнт перед числом");
                switch (oper)
                {
                    case 1:
                        double aa = Double("Введите показатель степени");
                        fn += (e0) => FPowA_X(e0, k, aa);
                        Console.WriteLine($"{k}*{aa}^x=0");
                        break;
                    case 2:
                        double ba = Double("Введите основание степени");
                        fn += (e1) => FPowX_A(e1, k, ba);
                        Console.WriteLine($"{k}*x^{ba}=0");
                        break;
                    case 3:
                        double ca = Double("Введите основание логарифма");
                        fn += (e3) => FLog(e3, k, ca);
                        Console.WriteLine($"{k}*log{ca} X=0");
                        break;
                    case 4:
                        int d = Int("Выберите опирацию 1=sin 2=cos 3=tg 4=ctg");
                        Func<double, double> ss = (e4) => e4;
                        fn += (e2) => FTriangl(ss, k, d)(e2);
                        break;
                }
            }
            double a = -3;
            double c = 25;
            double b = 4;
            double e = 0.00001f;
            while (Math.Abs(b - a) >= e)
            {
                if (fn(a) * fn(c) < 0)
                {
                    b = c;
                }
                else
                {
                    a = c;
                }

                c = (a + b) / 2;
            }
            Console.WriteLine(c);
        }

        private static int Int() => Convert.ToInt32(Console.ReadLine());
        private static double Double() => Convert.ToDouble(Console.ReadLine());

        private static int Int(string str)
        {
            Console.WriteLine(str);
            return Convert.ToInt32(Console.ReadLine());
        }
        private static double Double(string str)
        {
            Console.WriteLine(str);
            return Convert.ToDouble(Console.ReadLine());
        }

        private static double SumFunc2(Func<double, double> f1, Func<double, double> f2, double x) => f1(x) + f2(x);
        private static double SumFunc3(Func<double, double> f1, Func<double, double> f2, Func<double, double> f3, double x) => f1(x) + f2(x) + f3(x);

        private static double FPowA_X(double x, double k, double a) => k * Math.Pow(a, x);
        private static double FPowX_A(double x, double k, double a) => k * Math.Pow(x, a);
        private static double FLog(double x, double k, double a) => k * Math.Log(x, a);

        private static double FSin(double x, Func<double, double> f) => Math.Sin(f(x));
        private static double FCos(double x, Func<double, double> f) => Math.Cos(f(x));
        private static double FTan(double x, Func<double, double> f) => Math.Tan(f(x));
        private static double FCTg(double x, Func<double, double> f) => 1 / Math.Tan(f(x));

        private static Func<double, double> FTriangl(Func<double, double> f, double k, int a)
        {
            Func<double, double> fs = null;

            switch (a)
            {
                case 1:
                    fs += (e) => FSin(e, f);
                    break;
                case 2:
                    fs += (e) => FCos(e, f);
                    break;
                case 3:
                    fs += (e) => FTan(e, f);
                    break;
                case 4:
                    fs += (e) => FCTg(e, f);
                    break;
            }

            return (e) => fs(e) * k;
        }
    }
}