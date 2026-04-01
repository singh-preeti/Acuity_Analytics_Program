package org.basic.java;

public class Calculator {
	
	// local,global,parameterized variable 
	int number1 = 2,number2 =3;
	
	public int addition() {
		int a =10,b =10;
		int result = a+b;
		int result1 = number1+number2;
		System.out.println(result+result1);
		return result + result1;
	}
	
	public int subtract() {
		int a =10,b =10;
		int result = a-b;
		System.out.println(result);
		return result;
	}
	public static void main(String[] args) {
		Calculator calc = new Calculator();
		calc.addition();
		calc.subtract();
	}

}
