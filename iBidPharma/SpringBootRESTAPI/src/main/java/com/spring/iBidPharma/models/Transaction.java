package com.spring.iBidPharma.models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="transaction")
public class Transaction {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long tid;
	
	@Column
	private long mid;
	
	@Column
	private String mname;

	@Column
	private long pid;
	
	@Column
	private String pname;
	
	@Column
	private String category;

	@Column
	private long dist_id;
	
	@Column
	private String dname;

	@Column
	private long bid;
	
	@Column
	private long bvalue;

	@Column
	private long quantity;
	
	@Column
	private String state;

	@Column
	private String tdate;

	public Transaction() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Transaction(long mid, String mname, long pid, String pname, String category, long dist_id, String dname,
			long bid, long bvalue, long quantity, String state, String tdate) {
		super();
		this.mid = mid;
		this.mname = mname;
		this.pid = pid;
		this.pname = pname;
		this.category = category;
		this.dist_id = dist_id;
		this.dname = dname;
		this.bid = bid;
		this.bvalue = bvalue;
		this.quantity = quantity;
		this.state = state;
		this.tdate = tdate;
	}

	public long getTid() {
		return tid;
	}

	public long getMid() {
		return mid;
	}

	public void setMid(long mid) {
		this.mid = mid;
	}

	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public long getPid() {
		return pid;
	}

	public void setPid(long pid) {
		this.pid = pid;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public long getDist_id() {
		return dist_id;
	}

	public void setDist_id(long dist_id) {
		this.dist_id = dist_id;
	}

	public String getDname() {
		return dname;
	}

	public void setDname(String dname) {
		this.dname = dname;
	}

	public long getBid() {
		return bid;
	}

	public void setBid(long bid) {
		this.bid = bid;
	}

	public long getBvalue() {
		return bvalue;
	}

	public void setBvalue(long bvalue) {
		this.bvalue = bvalue;
	}

	public long getQuantity() {
		return quantity;
	}

	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getTdate() {
		return tdate;
	}

	public void setTdate(String tdate) {
		this.tdate = tdate;
	}

	@Override
	public String toString() {
		return "Transaction [tid=" + tid + ", mid=" + mid + ", mname=" + mname + ", pid=" + pid + ", pname=" + pname
				+ ", category=" + category + ", dist_id=" + dist_id + ", dname=" + dname + ", bid=" + bid + ", bvalue="
				+ bvalue + ", quantity=" + quantity + ", state=" + state + ", tdate=" + tdate + "]";
	}

}
