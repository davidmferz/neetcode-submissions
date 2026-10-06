class Solution {
    groupAnagrams(strs: string[]): string[][] {
        // Map para almacenar: clave_ordenada -> lista_de_anagramas
        const map = new Map<string, string[]>();
        
        for (const str of strs) {
            // Ordenar caracteres para crear una "firma" única
            const sorted = str.split('').sort().join('');
            
            // Agrupar strings con la misma firma
            if (!map.has(sorted)) {
                map.set(sorted, []);
            }
            map.get(sorted)!.push(str);
        }
        
        // Retornar los grupos como array
        return Array.from(map.values());
    }
}