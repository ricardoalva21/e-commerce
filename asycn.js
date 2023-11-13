// // P r o m i s e s . P r o m i s e s . P r o m i s e s . P r o m i s e s . P r o m i s e s . P r o m i s e s.

// const parlantes = [];
// const getParlantes = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (error) {
//         reject("Ocurrio un error");
//       } else {
//         resolve(parlantes);
//       }
//     }, 2000);
//   });
// };

// // with .Then
// getParlantes()
//   .then((parlantes) => console.log(parlantes))
//   .catch((error) => console.log("No se puede mostrar", error));

// // with Async/Await
// async function fetchingParlantes() {
//   try {
//     const parlantesFetched =  await getParlantes();
//     console.log(parlantesFetched);
//   } catch (err) {
//     console.log(err.menssage);
//   }
// }

// fetchingParlantes();

// Promises

const pinturas = [];
const getPinturas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Ocurrio un error");
      } else {
        resolve(pinturas);
      }
    }, 1000);
  });
};

//  Resolviendo usando .then --->

getPinturas()
  .then((pinturas) => console.log(pinturas))
  .catch((error) => console.log("No se encontraron pinturas", error));

//   Resolviendo usando Async/Await

async function fetchingPinturas() {
  try {
    const pinturasFetched = await getPinturas();
    console.log(pinturasFetched);
  } catch (err) {
    console.log(err.mensagge);
  }
}

const tazas = [];
const getTazas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Ocurrio un error");
      } else {
        resolve(tazas);
      }
    }, 50);
  });
};

async function fetchingTazaz() {
  try {
    const tazasFetched = await getTazas();
    console.log(tazasFetched);
  } catch (err) {
    console.log(err.mensagge);
  }
}

fetchingTazaz();

//  U ROCK!

const pianos = [];
const getPianos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Ocurrio un error");
      } else {
        resolve(pianos);
      }
    }, 1000);
  });
};

async function fetchingPianos() {
  try {
    const pianosFetched = await getPianos();
    console.log(pianosFetched);
  } catch (err) {
    console.log(err.message);
  }
}

fetchingPianos();

const chips = [];
const getChips = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("ocurrio un error");
      } else {
        resolve(chips);
      }
    }, 90);
  });
};
async function fetchingChips() {
  try {
    const chipsFetched = await getChips();
    console.log(chipsFetched);
  } catch (err) {
    console.log(err.mensagge);
  }
}

const frutas = [];
const getFrutas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Ocurrio un error");
      } else {
        resolve(frutas);
      }
    }, 1000);
  });
};

async function fetchingFrutas() {
  try {
    const frutasFetched = await getFrutas();
    console.log(frutasFetched);
  } catch (err) {
    console.log(err.mensagge);
  }
}

const relojs = [];

const getRelojs = () => {
  return Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Ocurrio un error");
      } else {
        resolve(relojs);
      }
    }, 2000);
  });
};

async function fetchingRelojs() {
  try {
    const relojsFetched = await getRelojs();
    console.log(relojsFetched);
  } catch (err) {
    console.log(err.mensagge);
  }
}

const conchas = [];

const getConchas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("ocurrio un error");
      } else {
        resolve(conchas);
      }
    }, 2000);
  });
};

async function fetchingConchas() {
  try {
    const conchasFetched = await getConchas();
    console.log(conchasFetched);
  } catch (err) {
    console.log(err.mensagge);
  }
}

const brochas = [];

const getBrochas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Ocurrio un error");
      } else {
        resolve(brochas);
      }
    }, 2000);
  });
};

async function fetchingBrochas() {
  try {
    const brochasFetched = await getBrochas();
    console.log(brochasFetched);
  } catch (err) {
    console.log(err.mensagge);
  }
}

const aprendizaje = [];

const getAprendizaje = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("No aprendiste");
      } else {
        resolve(aprendizaje);
      }
    }, 2000);
  });
};
async function fetchingAprendizaje() {
  try {
    const aprendizajeFetched = await getAprendizaje();
    console.log(aprendizajeFetched);
  } catch (err) {
    console.log(err.mensagge);
  }
}
