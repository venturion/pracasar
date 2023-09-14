const { createApp, ref, computed } = Vue

createApp({
  setup() {
    const defaultSteps = [{
      title: 'Ela é virgem',
      image: 'virgem01.jpg',
      message: 'Casando com uma mulher virgem suas chances de ter um casamento duradouro aumentam em 50%',
      points: 10,
      answer: true,
    }, {
      title: 'Conhece a família dela',
      image: 'famila-dela01.jpg',
      message: 'Conhecer a família da sua futura esposa é fundamental, pois casamento não é apenas união de duas pessoas e sim de duas famílias, lembre-se você terá que conviver com todas essas novas pessoas em sua vida',
      points: 10,
      answer: true,
    }, {
      title: 'Ela é de feminista',
      image: 'feminismo02.jpg',
      message: 'Se ela é feminista sinto lhe dizer não é para casar, não recomendaria nem manter amizade com esse tipo de mulher histérica',
      points: 10,
      answer: false,
    }, {
      title: 'Ela usa muita maquiagem',
      image: 'maquiagem01.jpg',
      message: 'O ideal seria conhecer sua pretendente sem maquiagem, pois sabemos que esse recurso pode enganar bastante e você pode ir dormir com uma princesa e acordar com uma bruxa, se ele precisa usar muita maquiagem então é provável que não seja tão bonita quando você imagina',
      points: 10,
      answer: false,
    }, {
      title: 'Ela tem amigos homens',
      image: 'amigos02.jpg',
      message: 'Não existe amizade entre mulheres e homens se pintar uma brecha ele vai comer ela, só prossiga se ela tiver disposta a se afastar dessas amizades e priorizar você',
      points: 10,
      answer: false,
    }, {
      title: 'Ela gosta de crianças',
      image: 'criancas02.jpg',
      message: 'Gostar de crianças é o melhor indicativo pra saber se ela realmente serve para casar, pois se uma mulher não gosta nem de crianças sinal que ela não está exercendo 100% sua feminilidade ou está no polo masculino priorizando carreira em detrimento da família',
      points: 10,
      answer: true,
    }, {
      title: 'Ela é "Viajeira"',
      image: 'viagem01.jpg',
      message: 'Caso ela goste muito de viajar esteja preparado financeiramente e psicologicamente pra arcar com os gastos e aporrinhações que venha a ter com isso, caso você seja mais caseiro melhor nem tentar',
      points: 10,
      answer: false,
    }, {
      title: 'Ela é Divorciada',
      image: 'divorcio01.jpg',
      message: 'Mulheres que já se divorciaram uma vez tendem a continuar se divorciando novamente, pelo simples fato que elas não levam a sério nada sobre o juramento que fizeram durante a cerimônia do casamento diante de Deus e da família',
      points: 10,
      answer: false,
    }, {
      title: 'Tem tatuagens',
      image: 'tatuagem01.jpg',
      message: 'Não se engane tatuagem é empoderamento feminino, demonstra insubmissão, tem significado profundo, seja um amor do passado, um atual, ou até um crime cometido por elas, na dúvida opte por quem não tenha tatuagens',
      points: 10,
      answer: false,
    }, {
      title: 'Tem filho',
      image: 'filho01.jpg',
      message: 'Essa é uma grande "red flag", se você não deseja pagar pensão socio afetiva pra uma criança que não é sua evite esta mulher',
      points: 10,
      answer: false,
    }]

    const current = ref(0)
    const score = ref(0)
    const loading = ref(false)
    const steps = ref(defaultSteps)

    const progress = computed(() => {
      return (current.value * 100) / steps.value.length
    })

    function showModalInfo(step, choice) {
      const vm = this
      loading.value = true
      step.choice = choice
    }

    function goTo(newStep, step) {
      const vm = this
      if((newStep >= 0) && (newStep <= steps.value.length)) {
        document.querySelector('body').style.cursor = 'wait'
        setTimeout(() => {
          loading.value = false
          current.value = newStep
          if (step.choice === step.answer) {
            score.value += step.points
          }
          document.querySelector('body').style.cursor = 'initial'
        }, 500)
      }
    }

    function reset () {
      current.value = 0
      score.value = 0
      loading.value = false
      steps.value = defaultSteps
    }

    return {
      current,
      steps,
      goTo,
      showModalInfo,
      score,
      reset,
      loading,
      progress,
    }
  }
}).mount('#app')

