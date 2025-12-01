import handleSortBy from "./handleSortBy"

export default function handleSelectByPrice(page, data, option) {
  const endData = []

  if (page === 'flowers') {
    if (option === "Under Ksh 10") {
      data.forEach((item) => {
        if (Number(item.price) < 10) {
          endData.push(item)
        }
      })

      if (endData.length === 0) {
        return {error: "No products found", type: option}
      }
  
      return handleSortBy(endData, 'Low to high')
    } else if (option === "Ksh 10 - Ksh 50") {
      data.forEach((item) => {
        if ((Number(item.price) >= 10) && (Number(item.price) < 50)) {
          endData.push(item)
        }
      })

      if (endData.length === 0) {
        return {error: "No products found", type: option}
      }
  
      return handleSortBy(endData, 'Low to high')
    } else if (option === "Ksh 50 - Ksh 100") {
      data.forEach((item) => {
        if ((Number(item.price) >= 50) && (Number(item.price) < 100)) {
          endData.push(item)
        }
      })

      if (endData.length === 0) {
        return {error: "No products found", type: option}
      }
  
      return handleSortBy(endData, 'Low to high')
    } else if (option === "Over Ksh 100") {
      data.forEach((item) => {
        if (Number(item.price) > 100) {
          endData.push(item)
        }
      })

      if (endData.length === 0) {
        return {error: "No products found", type: option}
      }
  
      return handleSortBy(endData, 'Low to high')
    }
  } else if (page === 'plants') {
    if (option === "Under Ksh 20") {
      data.forEach((item) => {
        if (Number(item.price) < 20) {
          endData.push(item)
        }
      })

      if (endData.length === 0) {
        return {error: "No products found", type: option}
      }
  
      return handleSortBy(endData, 'Low to high')
    } else if (option === "Ksh 20 - Ksh 70") {
      data.forEach((item) => {
        if ((Number(item.price) >= 20) && (Number(item.price) < 70)) {
          endData.push(item)
        }
      })

      if (endData.length === 0) {
        return {error: "No products found", type: option}
      }
  
      return handleSortBy(endData, 'Low to high')
    } else if (option === "Ksh 70 - Ksh 100") {
      data.forEach((item) => {
        if ((Number(item.price) >= 70) && (Number(item.price) < 100)) {
          endData.push(item)
        }
      })

      if (endData.length === 0) {
        return {error: "No products found", type: option}
      }
  
      return handleSortBy(endData, 'Low to high')
    } else if (option === "Over Ksh 100") {
      data.forEach((item) => {
        if (Number(item.price) > 100) {
          endData.push(item)
        }
      })

      if (endData.length === 0) {
        return {error: "No products found", type: option}
      }
  
      return handleSortBy(endData, 'Low to high')
    }
  } else if (page === 'gifts') {
    if (option === "Under Ksh 50") {
      data.forEach((item) => {
        if (Number(item.price) < 50) {
          endData.push(item)
        }
      })

      if (endData.length === 0) {
        return {error: "No products found", type: option}
      }
  
      return handleSortBy(endData, 'Low to high')
    } else if (option === "Ksh 50 - Ksh 100") {
      data.forEach((item) => {
        if ((Number(item.price) >= 50) && (Number(item.price) < 100)) {
          endData.push(item)
        }
      })

      if (endData.length === 0) {
        return {error: "No products found", type: option}
      }
  
      return handleSortBy(endData, 'Low to high')
    } else if (option === "Over Ksh 100") {
      data.forEach((item) => {
        if (Number(item.price) > 100) {
          endData.push(item)
        }
      })

      if (endData.length === 0) {
        return {error: "No products found", type: option}
      }
  
      return handleSortBy(endData, 'Low to high')
    }
  }

}