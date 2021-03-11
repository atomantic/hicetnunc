export const lowestPrice = (swaps) => {
  return swaps.reduce((sum, item) => {
    if (!sum || Number(item.xtz_per_objkt) < Number(sum.xtz_per_objkt)) {
      sum = item
    }
    return sum
  })
}
