import React from 'react';
import '../../Assets/Profil.css';
import { Categorie } from './Categorie';
import { CategorieFact } from './CategorieFact';

export class Profil extends React.Component {

    render() {
        return (
            <div class="Profil-cnt">
                <div className='Profil'>
                    <div class="space-profil"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <Categorie type = "Animal"/>
                            </div>
                        </div>
                    </div>
                    <div class="space-profil"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <Categorie type = "Country"/>
                            </div>
                        </div>
                    </div>
                    <div class="space-profil"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <Categorie type = "City"/>
                            </div>
                        </div>
                    </div>
                    <div class="space-profil"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <CategorieFact type = "Fact"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-profil"></div>
            </div>
        );
    }
}