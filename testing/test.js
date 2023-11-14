async function checkApiConnection()
  {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    try{
      const response = await fetch('https://3fwtbm1v-5004.euw.devtunnels.ms/api/healthcheck', {signal: controller.signal})
      clearTimeout(timeoutId)
      if(response && response.ok){
        console.log('API is connected')
        return true
      }
      else{
        console.error('Erro checking API connection', error)
        return false
      }
    } catch(error){
      clearTimeout(timeoutId)
      console.error('Error checking API connection', error)
      return false
    }
  }

function performApiCheck() {
    (async () => {
        const status = await checkApiConnection();
        if (status) {
            console.log("yep");
        } else {
            console.log("nope");
        }
    })();
}

performApiCheck();
