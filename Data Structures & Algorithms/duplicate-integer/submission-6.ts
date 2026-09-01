class Solution {
    hasDuplicate(nums: number[]): boolean {
        // 'Set' es perfecto para buscar y guardar rápidamente O(1)
        const seen = new Set<number>();

        for (const num of nums) {
            // ¿Ya vimos este número?
            if (seen.has(num)) {
                return true; // ¡Encontramos el duplicado!
            }
            // Si no lo hemos visto, lo guardamos en la memoria
            seen.add(num);
        }

        // Si revisamos todo y no hubo repetidos
        return false;
    }
}