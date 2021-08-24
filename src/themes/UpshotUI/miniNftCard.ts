import colors from "./colors"

const miniNftCard = {
  borderRadius: 20,
  padding: 8,
  errorBackground: colors["grey-600"],
  width: 148,
  height: 148,
  errorImageTop: 5,
  details: {
    defaultLeft: 10,
    background: colors["grey-800"]
  },
  price: {
    default: colors.primary,
    error: colors.red,
    fontSize: 18,
    paddingTop: 2,
    paddingLeft: 16,
    borderRadius: 20,
  },
  name: {
    default: colors["grey-300"],
    error: colors.red,
    fontSize: 12,
    paddingTop: 4,
    borderRadius: 20,
    blur: 30,
  }
}

export default miniNftCard
