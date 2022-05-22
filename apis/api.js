// 配置简化转换
function conversion(url, method, config) {
  return {
      url,
      method,
      ...config,
  }
}
export default conversion;
