//Este é código refatorado do arquivo main.js


class PrimeGenerator {
    static generatePrimes(max) {
        const primes = [];
        const maxOrder = 30;
        const multiples = Array(maxOrder + 1).fill(0);

        let num = 1;
        let order = 2;
        let square = 9;

        while (num <= max) {
            let isPrime = true;

            do {
                num += 2;
                if (num === square) {
                    order++;
                    square = primes[order] * primes[order];
                    multiples[order - 1] = num;
                }

                isPrime = this.isPrime(num, order, multiples, primes);

                if (isPrime) {
                    primes.push(num);
                }
            } while (!isPrime);
        }

        return primes;
    }

    static isPrime(num, order, multiples, primes) {
        let n = 2;

        while (n < order && this.checkMultiples(n, num, multiples, primes)) {
            n++;
        }

        return n === order;
    }

    static checkMultiples(n, num, multiples, primes) {
        while (multiples[n] < num) {
            multiples[n] += primes[n] + primes[n];
        }
        return multiples[n] === num;
    }

    static printPrimes(primes, rowsPerPage, columnsPerPage) {
        let pageNumber = 1;
        let pageOffset = 1;

        while (pageOffset <= primes.length) {
            console.log(`Page ${pageNumber}`);
            for (let rowOffset = pageOffset; rowOffset <= pageOffset + rowsPerPage - 1; rowOffset++) {
                const rowPrimes = this.getRowPrimes(primes, rowOffset, columnsPerPage);
                console.log(rowPrimes.join('|'));
            }
            pageNumber++;
            pageOffset += rowsPerPage * columnsPerPage;
        }
    }

    // Obtém os números primos para uma linha específica da página.
    static getRowPrimes(primes, rowOffset, columnsPerPage, rowsPerPage) {
        const rowPrimes = [];
        for (let column = 0; column < columnsPerPage; column++) {
            const index = rowOffset - 1 + column * rowsPerPage;
            if (index < primes.length) {
                rowPrimes.push(primes[index]);
            }
        }
        return rowPrimes;
    }

    static main() {
        const maxNumber = 1000;
        const primes = this.generatePrimes(maxNumber);
        this.printPrimes(primes, 50, 4);
    }
}

PrimeGenerator.main();