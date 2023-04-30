## var declaration
1. Line 9 prints "values added: 20"
2. Line 13 prints "final result: 20"
## let declaration
3. Line 9 prints "values added: 20"
4. Line 13 doesn't print anything and the code produces an error because variables declared by let cannot be accessed outside of the block they were defined.
## cont declaration
5. Line 9 doesn't print anything and the code produces an error because variables declared with const cannot be reassigned after they are defined. Line 7 breaks that rule since result was defined on line 5.
6. Line 13 doesn't print anything and the code produces an error because variables declared with const cannot be reassigned after they are defined. Line 7 breaks that rule since result was defined on line 5.