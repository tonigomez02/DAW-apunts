package com.fbmoll.programming.abstractWorld;

import java.util.Date;

public abstract class MusicalInstruments {
    private String instrumentKind;
    private String materials;
    private Integer yearsCreation;

    public String getInstrumentKind() {
        return instrumentKind;
    }

    public void setInstrumentKind(String instrumentKind) {
        this.instrumentKind = instrumentKind;
    }

    public String getMaterials() {
        return materials;
    }

    public void setMaterials(String materials) {
        this.materials = materials;
    }

    public Integer getYearsCreation() {
        return yearsCreation;
    }

    public void setYearsCreation(Integer yearsCreation) {
        this.yearsCreation = yearsCreation;
    }

}
