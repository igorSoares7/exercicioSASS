import { describe, expect } from "vitest"
import { test } from "vitest"
import {encontrarElemento, filtraElemento} from "src/js/modulos.js"

describe('Testes com Arrays e elementos a serem encontrados', () => { 
    test("Encontra elementos em um array de strings", () => {
        expect(encontrarElemento(['1','2','3','Ana','5'], '1')).toBe('1')
        expect(encontrarElemento(['10','22','333','Ana','5'], '333')).toBe('333')
        expect(encontrarElemento(['1','2','3','Ana','5'], 'João')).toBe(undefined)
    })
    test('Filtra elementos em um array de strings', () => {
        expect(filtraElemento(['Ana', 'Uva', '2', 'Ana', '4', 'Ana'], 'Ana')).toEqual(['Ana','Ana','Ana'])
        expect(filtraElemento(['Ana', 'Uva', '2', 'Ana', '4', 'Ana'], '4')).toEqual(['4'])
        expect(filtraElemento(['Ana', 'Uva', '2', 'Ana', '4', 'Ana'], 'Igor')).toEqual([])

    })
})