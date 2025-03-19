/*
id	6
tipo	"VEGETAL"
nome	"Maçã"
grama	100
valorEnergetico	52
carboidratos	14
acucaresTotais	10
acucaresAdicionais	0
proteinas	0
gorduraTotais	0
gorduraTrans	0
gorduraSaturada	0
fibra	2
sodio	1
vitaminaA	54
vitaminaB	0
vitaminaC	4
vitaminaD	0
vitaminaE	0
vitaminaK	0 */

// Importa as bibliotecas e componentes necessários
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './table.css';
// Define o componente funcional AlimentosTable
function AlimentosTable() {
  // Declara o estado para armazenar os dados dos alimentos
  const [alimentos, setAlimentos] = useState([]);

  // Usa o useEffect para buscar os dados da API quando o componente é montado
  useEffect(() => {
    // Função assíncrona para buscar os dados
    const fetchAlimentos = async () => {
      try {
        // Faz a requisição GET para a API
        const response = await axios.get('http://192.168.0.102:8080/alimentos');
        // Atualiza o estado com os dados recebidos
        setAlimentos(response.data);
      } catch (error) {
        // Loga o erro no console em caso de falha
        console.error('Erro ao buscar alimentos:', error);
      }
    };

    // Chama a função para buscar os dados
    fetchAlimentos();
  }, []); // O array vazio como segundo argumento garante que o useEffect seja executado apenas uma vez na montagem do componente

  // Renderiza o componente
  return (
    <TableContainer component={Paper} className="alimentos-table-container">
        <Table className="alimentos-table" aria-label="tabela de alimentos">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Tipo</TableCell>
                    <TableCell align="right">Nome</TableCell>
                    <TableCell align="right">Grama</TableCell>
                    <TableCell align="right">Valor Energético</TableCell>
                    <TableCell align="right">Carboidratos</TableCell>
                    <TableCell align="right">Açúcares Totais</TableCell>
                    <TableCell align="right">Açúcares Adicionais</TableCell>
                    <TableCell align="right">Proteínas</TableCell>
                    <TableCell align="right">Gordura Totais</TableCell>
                    <TableCell align="right">Gordura Trans</TableCell>
                    <TableCell align="right">Gordura Saturada</TableCell>
                    <TableCell align="right">Fibra</TableCell>
                    <TableCell align="right">Sódio</TableCell>
                    <TableCell align="right">Vitamina A</TableCell>
                    <TableCell align="right">Vitamina B</TableCell>
                    <TableCell align="right">Vitamina C</TableCell>
                    <TableCell align="right">Vitamina D</TableCell>
                    <TableCell align="right">Vitamina E</TableCell>
                    <TableCell align="right">Vitamina K</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {alimentos.map((alimento) => (
                    <TableRow
                        key={alimento.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {alimento.id}
                        </TableCell>
                        <TableCell align="right" data-label="Tipo">{alimento.tipo}</TableCell>
                        <TableCell align="right" data-label="Nome">{alimento.nome}</TableCell>
                        <TableCell align="right" data-label="Grama">{alimento.grama}</TableCell>
                        <TableCell align="right" data-label="Valor Energético">{alimento.valorEnergetico}</TableCell>
                        <TableCell align="right" data-label="Carboidratos">{alimento.carboidratos}</TableCell>
                        <TableCell align="right" data-label="Açúcares Totais">{alimento.acucaresTotais}</TableCell>
                        <TableCell align="right" data-label="Açúcares Adicionais">{alimento.acucaresAdicionais}</TableCell>
                        <TableCell align="right" data-label="Proteínas">{alimento.proteinas}</TableCell>
                        <TableCell align="right" data-label="Gordura Totais">{alimento.gorduraTotais}</TableCell>
                        <TableCell align="right" data-label="Gordura Trans">{alimento.gorduraTrans}</TableCell>
                        <TableCell align="right" data-label="Gordura Saturada">{alimento.gorduraSaturada}</TableCell>
                        <TableCell align="right" data-label="Fibra">{alimento.fibra}</TableCell>
                        <TableCell align="right" data-label="Sódio">{alimento.sodio}</TableCell>
                        <TableCell align="right" data-label="Vitamina A">{alimento.vitaminaA}</TableCell>
                        <TableCell align="right" data-label="Vitamina B">{alimento.vitaminaB}</TableCell>
                        <TableCell align="right" data-label="Vitamina C">{alimento.vitaminaC}</TableCell>
                        <TableCell align="right" data-label="Vitamina D">{alimento.vitaminaD}</TableCell>
                        <TableCell align="right" data-label="Vitamina E">{alimento.vitaminaE}</TableCell>
                        <TableCell align="right" data-label="Vitamina K">{alimento.vitaminaK}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
}

export default AlimentosTable;