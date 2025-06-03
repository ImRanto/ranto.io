"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ModifierNom = () => {
  const [name, setName] = useState("Ranto");
  const [isEdited, setIsEdited] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleClickEdit = () => {
    setIsEdited(true);
  };

  const handleClickSave = () => {
    setName(newName);
    setIsEdited(false);
  };

  const handleClickCancel = () => {
    setNewName(name);
    setIsEdited(false);
  };

  useEffect(() => {
    console.log("✅ Le nom a été mis à jour :", name);
  }, [name]); 

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-amber-50 p-10">
      {isEdited ? (
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-2xl shadow-lg border">
          <input
            type="text"
            value={newName}
            placeholder="Entrez un nom"
            className="px-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-amber-500"
            onChange={(e) => setNewName(e.target.value)}
          />

          <div className="flex gap-2 mt-2 sm:mt-0">
            <Button
              className="bg-amber-600 text-white hover:bg-amber-700 transition-all"
              onClick={handleClickSave}
            >
              Enregistrer
            </Button>
            <Button variant="outline" onClick={handleClickCancel}>
              Annuler
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-2xl shadow-md border">
          <h1 className="text-2xl font-semibold text-amber-800">
            Mon nom est : <span className="underline">{name}</span>
          </h1>
          <Button
            className="bg-amber-500 text-white hover:bg-amber-600 transition-all"
            onClick={handleClickEdit}
          >
            Modifier
          </Button>
        </div>
      )}
    </div>
  );
};

export default ModifierNom;
