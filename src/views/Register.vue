<template>
  <div class="wrapper">
    <header>完美匹配·注册信息</header>
    <main>
      <div class="container">
        <div>
          <span>账号：</span>
          <input type="text" v-model="username" placeholder="输入你的账号" />
        </div>
        <div>
          <span>姓名：</span>
          <input type="text" v-model="name" placeholder="输入你的姓名" />
        </div>
        <div>
          <span>手机号码：</span>
          <input type="text" v-model="phoneNumber" placeholder="输入你的手机号" />
        </div>
        <div>
          <span>性别：</span>
          <label>
            <input type="radio" name="radio" v-model="sex" checked />
            <i>男</i>
          </label>
          <label>
            <input type="radio" name="radio" v-model="sex" />
            <i>女</i>
          </label>
          <span></span>
        </div>
        <div>
          <span>生日：</span>
          <el-date-picker v-model="birth" type="date" placeholder="选择日期"> </el-date-picker>
        </div>
        <div>
          <span>邮箱：</span>
          <input type="email" v-model="email" placeholder="输入你的邮箱" />
        </div>
        <div>
          <span>密码：</span>
          <input type="password" v-model="pwd" placeholder="输入你的密码" />
        </div>
        <button>注册</button>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Register",
  setup() {
    const numberValidateForm = ref(null);

    // const submitForm = (formName) => {};

    const state = reactive({
      username: "",
      name: "",
      phoneNumber: "",
      sex: "",
      birth: "",
      email: "",
      pwd: "",
    });
    // const store = useStore();
    // console.log(store.state.register);
    // console.log(store.getters.getList);
    // console.log(store);
    // store.commit("login/setList", [3, 2, 1]);
    // console.log(store.state, "abbc");
    // console.log(store.state.register);
    // console.log(store.state.login);

    // onMounted(() => {
    //   console.log(numberValidateForm.value);
    // });

    return { ...toRefs(state) };
  },
});
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url(../assets/images/OIP.jpg) no-repeat;
  background-size: 100% 100%;

  header {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    font-size: 0.8rem;
    text-shadow: 0.02rem 0.03rem 0.03rem #e91e63;
    font-weight: 600;
    letter-spacing: 0.02rem;
    font-family: cursive;
    margin: 0.35rem 0;
  }

  main {
    flex: 1;
    position: relative;

    .container {
      width: 50%;
      height: 6rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(244, 246, 247, 0.4);
      padding: 0.3rem;
      font-size: 0.35rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: inherit;

        span {
          width: 30%;
          font-size: 0.25rem;
          font-weight: 600;

          &:nth-of-type(2) {
            flex: 1;
          }
        }

        input {
          flex: 1;
          height: 0.45rem;
          padding: 0.3rem 0.1rem;
          outline: none;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid #fff;
          border-radius: 0.03rem;
          font-size: 0.25rem;
          color: #fff;

          &::placeholder {
            color: #fff;
            font-size: 0.25rem;
          }
        }

        label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;

          i {
            color: #fff;
            margin-left: 0.1rem;
          }

          &:nth-of-type(2) {
            margin-left: 0.3rem;
          }
        }
      }

      /deep/ .el-input__icon,
      .el-icon-date {
        height: 0.5rem;
        line-height: 0.5rem;
      }

      /deep/ .el-input,
      .el-input--prefix,
      .el-input--suffix,
      .el-date-editor,
      .el-date-editor--date {
        flex: 1;
        line-height: 0.3rem;

        .el-input__inner {
          height: 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;

          &::placeholder {
            color: #fff;
          }
        }
      }

      button {
        height: 0.5rem;
        margin: 0 auto;
        outline: none;
        background: #1580f1;
        border-radius: 0.03rem;
        padding: 0.3rem;
        color: #fff;
        border: none;
        font-size: 0.3rem;
        line-height: 0;
        transition: background 0.8s;

        &:hover {
          background: lightcoral;
        }
      }
    }
  }
}
</style>
