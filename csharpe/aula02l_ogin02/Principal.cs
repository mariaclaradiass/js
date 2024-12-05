using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace aula02l_ogin02
{
    public partial class Principal : Form
    {
        string login = "maria@gmail.com";
        string senha = "maria123";
        public Principal()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {
            string confereLogin = txtLogin.Text;
            string confereSenha = txtSenha.Text;
            if (login == confereLogin && senha == conferesenha)
            {
                MessageBox.Show("Login realizado com sucesso");

            }
            else
            {
                MessageBox.Show("usuario ou senha invalidos");
            }
        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void Principal_Click(object sender, EventArgs e)
        {

        }
    }
}
