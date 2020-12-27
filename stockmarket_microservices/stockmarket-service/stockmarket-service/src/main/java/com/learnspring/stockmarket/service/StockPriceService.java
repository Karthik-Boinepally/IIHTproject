package com.cognizant.stockmarket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cognizant.stockmarket.model.Company;
import com.cognizant.stockmarket.model.StockPrice;
import com.cognizant.stockmarket.repository.CompanyRepository;
import com.cognizant.stockmarket.repository.StockRepository;

@Component
public class StockPriceService {

	@Autowired
	private StockRepository stockPriceRepo;
	@Autowired
	private CompanyRepository compRepo;

	public void addStockPrice(List<StockPrice> sp) {
		stockPriceRepo.saveAll(sp);
	}

	public List<StockPrice> getStockPriceWeek(String name,String stock){
		Company comp = compRepo.getCompanyByName(name);
		return stockPriceRepo.getStockPricesByCompanyLastWeek(comp.getCompanyId(),stock);
	}

	
}
