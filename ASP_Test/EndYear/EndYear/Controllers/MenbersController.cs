using EndYear.Models;
using Dapper;
using Oracle.ManagedDataAccess.Client;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using System.Data;
using System.IO;

namespace EndYear.Controllers
{
    public class MenbersController : ApiController
    {
        /*建立資料庫的連線, check Web.config  <connectionStrings>*/
        private readonly string conn = ConfigurationManager.ConnectionStrings["ILIS"].ConnectionString;

        [Route("api/Menbers/getAll")]
        public IHttpActionResult getAll()
        {
            string sql = @"SELECT * FROM EndYearNameList";
            using (OracleConnection db = new OracleConnection(conn))
            {

                OracleCommand cmd = new OracleCommand(sql, db);

                //BindByName預設為false，SQL會依照順序代入參數
                //若設為true時，則依參數名稱代入參數
                cmd.BindByName = true;

                OracleDataAdapter DataAdapter = new OracleDataAdapter();
                DataAdapter.SelectCommand = cmd;

                DataSet ds = new DataSet();
                DataAdapter.Fill(ds);
                //查詢到的資料都存在ds中了

                //get table data
                //System.Diagnostics.Debug.WriteLine(ds.Tables[0].Rows[5]["NAME"].ToString());

                List<String> codeName = new List<string>();
                Dictionary<string, List<String>> allData = new Dictionary<string, List<String>>();

                foreach (DataRow row in ds.Tables[0].Rows) {
                    codeName.Add(row["CODE"].ToString() + row["NAME"].ToString());
                }
                allData.Add("codeName", codeName);

                return Ok(allData); //如果返回Ok()，就表示不向客戶端返回任何資訊，只告訴客戶端請求成功。
            }
        }

        [Route("api/Menbers/getOne")]
        public IHttpActionResult getOneData()
        {
            String sql;
            sql = "SELECT A.* FROM (";
            sql += "SELECT * FROM EndYearNameList WHERE EndYearNameList.STATUS='0' ORDER BY dbms_random.value ) A ";
            sql += "WHERE rownum <= 1";

            using (OracleConnection db = new OracleConnection(conn))
            {

                OracleCommand cmd = new OracleCommand(sql, db);

                //BindByName預設為false，SQL會依照順序代入參數
                //若設為true時，則依參數名稱代入參數
                cmd.BindByName = true;

                OracleDataAdapter DataAdapter = new OracleDataAdapter();
                DataAdapter.SelectCommand = cmd;

                DataSet ds = new DataSet();
                DataAdapter.Fill(ds);
                //查詢到的資料都存在ds中了

                //get table data
                System.Diagnostics.Debug.WriteLine(ds.Tables[0].Rows[0]["NAME"].ToString());
                System.Diagnostics.Debug.WriteLine(ds.Tables[0].Rows[0]["CODE"].ToString());

                Dictionary<string, string> chooseData = new Dictionary<string, string>();
                chooseData.Add("ID", ds.Tables[0].Rows[0]["ID"].ToString());
                chooseData.Add("CODE", ds.Tables[0].Rows[0]["CODE"].ToString());
                chooseData.Add("NAME", ds.Tables[0].Rows[0]["NAME"].ToString());
                chooseData.Add("STATUS", ds.Tables[0].Rows[0]["STATUS"].ToString());

                return Ok(chooseData); //如果返回Ok()，就表示不向客戶端返回任何資訊，只告訴客戶端請求成功。
            }
        }

        [System.Web.Http.HttpPut]
        [Route("api/Menbers/putOne")]
        public void PutOne([FromBody] EndYearNameList value)
        {
            var parameter = new DynamicParameters();
            parameter.Add("ID", value.ID);
            parameter.Add("STATUS", value.STATUS);

            System.Diagnostics.Debug.WriteLine(value.ID);
            System.Diagnostics.Debug.WriteLine(value.STATUS);

            string sql = @"UPDATE EndYearNameList SET 
                           STATUS = :STATUS 
                           WHERE ID = :ID";

            using (OracleConnection db = new OracleConnection(conn))
            {
                var method2 = db.Execute(sql, value);
            }
        }

        [Route("api/Menbers/output")]
        public IHttpActionResult output()
        {

            return Ok("YES"); //如果返回Ok()，就表示不向客戶端返回任何資訊，只告訴客戶端請求成功。
        }

        
    }
}