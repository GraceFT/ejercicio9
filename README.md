# Ejercicio9: Parrot Trouble

Inicio: Evaluar cuando nos encontramos en problemas si el loro habla .

##Ingreso de Datos
- hora (rango de 0 a 23)
- talking
- evaluar

##Proceso
- Pedir hora
- Evaluar hora y guardar en evaluar.
    - Si (hora >= 0 and hora <=23 y  no esta hablando)
            retorna 0//no estamos en problemas.
        - Si no
            - Si (hora<7 y esta hablando o la hora>20 y esta hablando)
                retorna 1// estamos en problemas
            - Si no
                retorna 0//no estamos en problemas
        Fin si        
Fin si

*Fin*