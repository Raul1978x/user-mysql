package com.mysql.casaFuturo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDTO {
    private Long id;
    private String nombre;
    private String apellido;
    private String telefono;
    private String DNI;
    private String direccion;
    private String codigoPostal;
}
