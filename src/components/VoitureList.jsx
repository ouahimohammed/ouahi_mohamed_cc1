import  { useState } from 'react';
import VoitureItem from './VoitureItem';

import toyota from '../images/toyota.jpg';
import dacia from '../images/dacia.jpg';
import tesla from '../images/tesla.jpg';
import rr4 from '../images/rr4.jpg';


const VoitureList = () => {
  const [voitures, setVoitures] = useState([
    { matricule: '1234-ABC', marque: 'Toyota', image: toyota , carburant: 'Essence', prixAchat: 15000 },
    { matricule: '5678-DEF', marque: 'Dacia', image: dacia, carburant: 'Diesel', prixAchat: 35000 },
    { matricule: '9101-GHI', marque: 'Tesla', image: tesla, carburant: 'Électrique', prixAchat: 50000 },
    { matricule: '9131-GHC', marque: 'R4', image: rr4, carburant: 'Diesel', prixAchat: 40000 },
  ]);

  // Supprimer une voiture
  const handleDelete = (matricule) => {
    const filteredVoitures = voitures.filter((voiture) => voiture.matricule !== matricule);
    setVoitures(filteredVoitures);
  };

  // Changer la couleur (déclenche une action pour changer l'apparence)
  const handleChangeColor = (matricule) => {
    console.log(`Changement de couleur pour la voiture avec matricule: ${matricule}`);
  };

  // Statistiques
  const totalVoitures = voitures.length;
  const voituresParMarque = voitures.reduce((acc, voiture) => {
    acc[voiture.marque] = (acc[voiture.marque] || 0) + 1;
    return acc;
  }, {});

  const voitureMaxPrix = voitures.reduce((max, voiture) => {
    return voiture.prixAchat > max.prixAchat ? voiture : max;
  }, voitures[0]);

  return (
    <div>
      <h1>Liste des Voitures</h1>
      <div className="voitures-list">
        {voitures.map((voiture) => (
          <VoitureItem
            key={voiture.matricule}
            voiture={voiture}
            onDelete={handleDelete}
            onChangeColor={handleChangeColor}
          />
        ))}
      </div>
      <div className="stats">
        <table className="stats-table">
          <thead>
            <tr>
              <th>Statistiques</th>
              <th>Valeur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total de voitures</td>
              <td>{totalVoitures}</td>
            </tr>
            <tr>
              <td>Voitures par marque</td>
              <td>
                <ul>
                  {Object.keys(voituresParMarque).map((marque) => (
                    <li key={marque}>
                      {marque}: {voituresParMarque[marque]}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Voiture la plus chère</td>
              <td>{voitureMaxPrix.marque} - {voitureMaxPrix.prixAchat} DH</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoitureList;
