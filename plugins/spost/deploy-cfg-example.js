// it's global variable attched to browser's window object
// your deployment should change it to meet your real enviroment
window.config = {
  // 应用接口调用服务根地址，仅仅调试模式下使用，设置成 mbss-mock-server 的服务地址
  APIRoot: 'http://localhost:3001',

  // 客户端部署使用的各个后台工作服务地址
  workerPrefixes: {
    '': '', // 默认服务后台地址，必须有此项,
    service1: 'http://127.0.0.1:18080/prefix!@',
  },

  onDevs: true,
};
