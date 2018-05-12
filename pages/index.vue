<template>
  <div>
    <b-alert show>任务列表</b-alert>
    <b-table striped hover :items="ts.d.qryAuditAppointments" v-if="0"></b-table>
    <table class="table table-striped table-bordered table-hover" v-if="ts.o">
      <thead class="thead-light">
        <tr>
          <th>任务单号</th>
          <th>预约渠道</th>
          <th>意向产品</th>
          <th>意向活动</th>
          <th>预交话费</th>
          <th>装机地址</th>
          <th>用户姓名</th>
          <th>联系电话</th>
          <th>原预约时间</th>
          <th>申请变更预约时间</th>
          <th>申请时间</th>
          <th>审核人</th>
          <th>审核工号</th>
          <th>审核时间</th>
          <th>审核状态</th>
          <th>是否审核通过</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in ts.d.qryAuditAppointments" :key="task.taskId">
          <td>{{task.taskId}}</td>
          <td>{{task.channelName}}</td>
          <td>{{task.productName}}</td>
          <td>{{task.activName}}</td>
          <td>{{task.activMoney}}</td>
          <td>{{task.userAddress}}</td>
          <td>{{task.userName}}</td>
          <td>{{task.userPhone}}</td>
          <td>{{task.apptOld}}</td>
          <td>{{task.appNew}}</td>
          <td>{{task.applyTime}}</td>
          <td>{{task.auditStaffName}}</td>
          <td>{{task.auditStaffId}}</td>
          <td>{{task.auditTime}}</td>
          <td>{{task.auditResult}}</td>
          <td>
            <div class="btn-group">
                <button class="btn btn-info btn-sm" @click="auditAppointment(task,'1')" >通过</button>
                <button class="btn btn-warning btn-sm" @click="auditAppointment(task,'0')" >拒绝</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <b-alert variant="danger" dismissible v-if="ts.o">
      查询失败！
    </b-alert>
  </div>
</template>
<script>
export default {
  data() {
    return {
      debug: false,
      ts: this.newStore(),
      aa: this.newStore(),
    };
  },
  created() {
    this.qryAuditAppointments();
  },
  methods: {
    qryAuditAppointments() { // 获取当前工号和发展人对应的全部任务列表
      if (this.ts.b && (Date.now() - this.ts.b.getTime()) < 3000) {
        window.alert('离上次查询还没到三秒钟');
        return; // 离上次点击还没到三秒钟，忽略，防止重复相同请求造成服务端压力
      }
      this.spost(this.ts, '/taskAppointment/qryAuditAppointments', { }).then(() => { });
    },
    auditAppointment(task, _result) {
      this.spost(this.aa, '/taskAppointment/approveAppointmentChange', {
        channelCode: task.channelCode,
        taskId: task.taskId,
        reseq: task.reseq,
        applyTime: task.applyTime.substr(0, task.applyTime.indexOf('.')), // 申请预约时间修改的时间点
        iomStaffId: this.$root.params.iomStaffId, // 中兴工号
        iomStaffName: this.$root.params.iomStaffName, // 中兴工号对应的姓名
        result: _result, // 0拒绝 1通过
        reason: '', // 拒绝原因
      }).then(() => {
        window.alert('审核成功!');
      }).catch((e) => {
        console.error(e);
        window.alert('审核失败');
      });
    },
  },
  filters: {
    shortTime(dtStr) {
      if (!dtStr) return '';
      return dtStr.substr(5, 11);
    },
  },
};
</script>
