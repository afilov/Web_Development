package mk.ukim.finki.wp.web;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "Delivery")
public class Delivery extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String OpSystem  = request.getHeader("user-agent");
        String PType = request.getSession().getAttribute("type").toString();
        String name = request.getParameter("name");
        String address = request.getParameter("address");
        PrintWriter out = response.getWriter();
        out.println("<h1>Confirmation</h1><br/><p><b>OS:</b>" + OpSystem + " <br><b>Pizza Type:</b> " + PType + " <br><b>Name:</b> " + name + " <br><b>Address:</b> " + address + "</p");

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
