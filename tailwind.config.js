export default {
  theme: {
    extend: {
      // 手动设置你希望的 px 值
      screens: {
        sm: '640px',          // master提交
        md: '768px',
        lg: '1056px',
        xl: '1253px', // 手动设置你希望的 px 值 //main分支新增代码 // 主分支又提交代码 /分支cp
        2xl: '1536px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
