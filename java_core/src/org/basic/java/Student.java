package org.basic.java;

public class Student {
	//declare the variables
	// constructor
	  
	 int student_age = 20;

	String student_name = "Kunal";
	 

	// Define methods
	  public void studentDetails(){
	   System.out.println("student age = " +student_age);
	   System.out.println("student name = " +student_name);
	   
	}
	  public static void main(String args[]){
	  Student student_obj = new Student();
	   student_obj.studentDetails();
	}


}
