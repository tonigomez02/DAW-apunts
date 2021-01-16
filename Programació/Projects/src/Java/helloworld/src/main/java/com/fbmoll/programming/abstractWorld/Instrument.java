package com.fbmoll.programming.abstractWorld;

public class Instrument extends MusicalInstruments {
    private MusicalInstruments Instrument;

    public MusicalInstruments getInstrument() {
        return Instrument;
    }

    public void setInstrument(MusicalInstruments instrument) {
        this.Instrument = instrument;
    }
}
