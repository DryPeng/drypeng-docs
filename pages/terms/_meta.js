const { createCatchAllMeta } = require('nextra/catch-all')
import { useTerms } from "@/hooks";

module.exports = async () => {
  const { data } = await useTerms();
  // FIXME: This is horrible but does the job
  const pageList = data.map((item) => {return item.name + '.mdx'})
  return createCatchAllMeta(pageList)
};
