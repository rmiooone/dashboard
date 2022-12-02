import React from 'react';
import '../../Assets/Profil.css';
import { Categorie } from './Categorie';

export class Profil extends React.Component {

    render() {
        return (
            <div class="Profil-cnt">
                <div className='Profil'>
                    <div class="space-profil"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <Categorie />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-profil"></div>
            </div>
        );
    }
}