export default function NumberBox({ number }: { number: number }) {
  function isPrime(num) {
    if (num <= 1) {
      return false; // 1 and numbers less than 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // If divisible by any number other than 1 and itself, it's not prime
      }
    }
    return true; // If no divisors found, it's prime
  }

  let backgroundcolor = "#f55742";
  if (isPrime(number)) {
    backgroundcolor = "#f55742";
  } else {
    if (number % 2 == 0) {
      backgroundcolor = "#42f581";
    } else {
      backgroundcolor = "#f5d142";
    }
  }

  const styles = {
    width: "140px",
    height: "140px",
    backgroundColor: backgroundcolor, // Optional background color
    display: "flex",
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    textAlign: "center", // Centers text horizontally
    fontSize: "40px", // Adjust font size as needed
    color: "white",
    border: "1px solid white",
  };
  return (
    <div>
      <p style={styles}>
        <center>{number}</center>
      </p>
    </div>
  );
}
