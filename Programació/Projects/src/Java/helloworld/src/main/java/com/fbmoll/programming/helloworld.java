package com.fbmoll.programming;

import com.fbmoll.programming.abstractWorld.Instrument;
import com.fbmoll.programming.abstractWorld.MusicalInstruments;
import com.fbmoll.programming.data.Person;
import com.fbmoll.programming.data.Students;

import java.util.ArrayList;
import java.util.List;

public class helloworld {
    public static void main(String[] args) {
        Person teacher = new Person();
        teacher.setAge(45);
        teacher.setName("Pepito");
        teacher.setSurname("Grillo");
        teacher.legs = 5;
        Students std= new Students();



        Instrument guitarra = new Instrument();
        guitarra.setInstrumentKind("Stringed");
        guitarra.setMaterials("Wood");
        guitarra.setYearsCreation(4000);

        Instrument  drum = new Instrument();
        drum.setInstrumentKind("Percusion");
        drum.setYearsCreation(110);
        drum.setMaterials("Wood and membrane");

        Instrument saxophone = new Instrument();
        saxophone.setInstrumentKind("Brass");
        saxophone.setYearsCreation(175);
        saxophone.setMaterials("Brass");

        Instrument transverseFlute = new Instrument();
        transverseFlute.setInstrumentKind("Woodwind");
        transverseFlute.setYearsCreation(820);
        transverseFlute.setMaterials("Wood");


        List<MusicalInstruments> list = new ArrayList<>();
        list.add(guitarra);
        list.add(drum);
        list.add(saxophone);
        list.add(transverseFlute);


        System.out.println("Hello World");
    }
}
