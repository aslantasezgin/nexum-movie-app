
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { add, eachDayOfInterval, endOfWeek, format, isEqual, parse, startOfDay, startOfToday, startOfWeek } from 'date-fns';
import './dateModal.css'
import { ArrowLeft, ArrowRight, Trash } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setWatchList } from '../../store/WatchListSlice/WatchListSlice';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';

const DateModal = (props) => {

    const movie = props.item
    const {watchList} = useSelector((state) => state.watchList)
    const dispatch = useDispatch()
    let today = startOfToday()

    let [selectedDay, setSelectedDay] = useState(today)
    let [currentWeek, setCurrentWeek] = useState(format(today, 'dd-MM-yyyy'))
    let firstDayCurrentWeek = parse(currentWeek, 'dd-MM-yyyy', new Date())

   let newDays =  eachDayOfInterval({
    start:firstDayCurrentWeek,
    end:endOfWeek(firstDayCurrentWeek)})

   const nextWeek = () => {
   let firstDayNextWeek =  add(firstDayCurrentWeek, {days: 7})
   setCurrentWeek(format(firstDayNextWeek, 'dd-MM-yyyy'))
   }
   
   const previousWeek = () => {
    let firstDayNextWeek =  add(firstDayCurrentWeek, {days: -7})
    setCurrentWeek(format(firstDayNextWeek, 'dd-MM-yyyy'))
    }

    const addWatchList = () => {
    const findWL = watchList.find((wl) => wl.imdbID == movie.imdbID)
    if(findWL){
    toast.error("Aynı filmi 2 kere ekleyemezsiniz.")
    }else{
        toast.success(movie.Title + " " + "seçtiğiniz tarihe eklenmiştir.")
        dispatch(setWatchList([...watchList, {"title": movie.Title, "year": movie.Year, "imdbID": movie.imdbID, "poster":movie.Poster, "date" : format(selectedDay, 'dd-MM-yyyy')}]))

    }
    }

    const deleteWatchList = (dwl) => {
        const newWatchList = watchList.filter((wl) => wl.imdbID !== dwl)
        dispatch(setWatchList(newWatchList))
        toast.success("Film seçtiğiniz tarihten kaldırılmıştır.")
    }


       return(
        <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Daha Sonra İzle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <div className='date-control'>
        <span className='previous date'>
        <ArrowLeft onClick={() => {
          previousWeek()  
        }}></ArrowLeft>    
        </span>

        <span className='next date'>
        <ArrowRight onClick={() => {
         nextWeek()   
        }}></ArrowRight>    
        </span>

        </div>

        <div className='days'>
        {newDays.map((day) => {
            return(
            <div onClick={() => {
             setSelectedDay(day)   
            }} className={`day-box ${isEqual(day, selectedDay) && 'selected'}` }  >
           <span className='day-year'> {format(day,'yyyy')}</span>
          <span className='day-day'>  {format(day,'dd')}</span>
          <span className='day-month'> {format(day,'MM')}</span>
            </div>
   
           )
        })}

        </div>


        

        <div className='watch-list'>

        <Table striped bordered hover >
      <thead>
        <tr>
          <th>Görsel</th>
          <th>Film Adı</th>
          <th style={{width:"20px"}}></th>
        </tr>
      </thead>
      <tbody>

      {watchList.map((wl) => {
         if(wl.date == format(selectedDay, 'dd-MM-yyyy')){
        return(
            <tr>
            <td><img src={wl.poster}></img></td>
            <td>{wl.title}</td>
            <td><span className='delete-movie' onClick={() => {
                deleteWatchList(wl.imdbID)
            }}> <Trash></Trash> </span> </td>
          </tr> 
        )
         }
        })}

        

      
      </tbody>
    </Table>

        </div>

        </Modal.Body>
        <Modal.Footer>
 
          <span onClick={() => {
          addWatchList()
          }} className='btn btn-primary'>
          Ekle
          </span>

       
        </Modal.Footer>
      </Modal>
    )

}


export default DateModal