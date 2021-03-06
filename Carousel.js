/* eslint no-eval: 0 */
import React, { Component } from 'react';
import env from './env.json';
import {NavLink} from 'react-router-dom';
import Enquiry from './Enquiry';
import { connect } from 'react-redux'
import {mapDispatchHome} from '../reducers/actions'
import DocumentMeta from 'react-document-meta';
import {Card,CardHeader,CardTitle,CardBody,Button} from 'reactstrap';


class CarouselComp extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0,search:[],currentCat:'All',modal:false};
    this.props.getCategory('All');
  }

  meta = {
    title: 'iTraining',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'http://example.com/path/to/page',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      }
    }
  };

  handleKeyPress = (event) => {
    let courses=this.props.state.courses;
    if(event.target.value.length<1) courses=[];
    else{
      var patt = "/"+event.target.value+"/ig";
      console.log(courses)
      courses=courses.filter(course=>eval(patt).test(course.courseName));
    }
    this.setState({search: courses});
  }

  toggle=()=> {this.setState({modal: !this.state.modal});}

  getItems = (page) => {return this.props.state.item.filter(function(x,i) { return (i>=((page-1)*4) && i<page*4) })}
  getCurrency=()=>{return this.props.state.country?this.props.state.country.Currency+' ':'';}


  render() {
    let currency=this.getCurrency();
    const getCourseFee=(fee)=>{return 'INR '+ fee;return this.props.state.country?(Math.round(Number(this.props.state.country.rate)*fee)):''}
    const Course=(props)=>{
      let currency=props.currency
      return (
      props.item.map((item,index) =>(
      <Card key={index} className="widget">
        <CardHeader className="">
          <CardTitle><NavLink title={"Check "+item.courseName} className="text" to={"/Course/"+item.courseName}><img alt={item.courseName} src={env.img+item.logo} height="200"/></NavLink></CardTitle>
        </CardHeader>
        <CardBody>
        <NavLink title={"Check "+item.courseName} className="text" to={"/Course/"+item.courseName}>
          <div className="text-center text"><NavLink title={"Check "+item.courseName} className="text" to={"/Course/"+item.courseName}>{item.courseName}</NavLink></div>
          <Button className="btn form-control bg-darkblue"><span className={item.disc?'strike':''}>{currency+getCourseFee(item.fee)}</span> {item.disc?currency+getCourseFee(item.disc):''}</Button>
        </NavLink>
        </CardBody>
      </Card>)))
    }

    if(!this.props.state.item) return(<div><div className="loading text-center">Loading...</div></div>);
    if (this.props.state.item){
      let item=this.props.state.item;
      let category=this.props.state.category;
      let courses=this.state.search;
      return (
      <DocumentMeta {...this.meta}>
      <div>
      <div className="search">
        <h1 className="text-center text">Dont just learn it, Master it</h1>
        <div className="text text-center">The most effective learning system. World’s highest course completion rate.</div>
        <br/>
        <div className="input-group container">
            <input type="text" className="form-control" placeholder="Search" onKeyUp={this.handleKeyPress} />
            <span className="input-group-addon hand"><i className="fa fa-search"></i></span>
        </div>
        <div className="container">
        <ul className="list-group" id="myUL">
          {courses?courses.map((course,index) =>(
          <li key={index} className="list-group-item"><NavLink title={"Check "+course.courseName} className="text" to={"/Course/"+course.courseName}>{course.courseName}</NavLink></li>)):''
        }
        </ul>
        </div>
        <div>
          <div className="text text-center m-3"><span>Top Categories:</span>
          {category?category.map((cat,index) =>(
            <NavLink className="text" to={"/Category/"+cat} key={index}><div className="d-lg-inline-block category" > {cat}</div></NavLink>
          )):''}
          </div>
        </div>
      </div>
      <div className="container">
      <ul className="nav nav-tabs">
      <li key='All' className="nav-item"><a className={this.props.state.currentCat==='All'?'nav-link active':'nav-link'} onClick={() => { this.props.getCategory('All')}}>All</a></li>
      {category?category.map((page,index) =>(

        <li key={index} className="nav-item">
          <a className={this.props.state.currentCat===page?'nav-link active':'nav-link'} onClick={() => { this.props.getCategory(page)}}>{page}</a>
        </li>)):''}

      </ul>
      </div>

      <div className="container">
        <div id="slider2" className="carousel slide mb-5" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
          {item?this.props.state.widgetPages.map((page,index) =>(
            <div key={index} className={(page===0)?'carousel-item active bg-carousel':'carousel-item bg-carousel'}>
            <div className="row justify-content-center">
            <Course item={this.getItems(page+1)} currency={currency}></Course>
            </div>
            </div>
          )):''}
          </div>
          <a href="#slider2" className="carousel-control-prev" data-slide="prev">
            <span className="carousel-control-prev-icon"> &lt; </span>
          </a>
          <a href="#slider2" className="carousel-control-next" data-slide="next">
            <span className="carousel-control-next-icon"> &gt; </span>
          </a>
        </div>

      </div>
      <Enquiry curr={this} countries={this.props.state.countries}/>
      </div>
    </DocumentMeta>    );}
  }
}



const mapStateToProps = (state) => {return {state:state}}

export default connect(mapStateToProps,mapDispatchHome)(CarouselComp);
