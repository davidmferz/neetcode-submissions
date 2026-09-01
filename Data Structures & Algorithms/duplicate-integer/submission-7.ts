class Solution {
    hasDuplicate(nums: number[]): boolean {
        // Recorremos cada número...
        for (let i = 0; i < nums.length; i++) {
            // ...y lo comparamos con el resto de números a su derecha
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true; // ¡Par duplicado encontrado!
                }
            }
        }
        return false;
    }
}