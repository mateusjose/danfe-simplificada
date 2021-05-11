const Danfe = require('../src')
const NFe = require('djf-nfe')
const fs = require('fs')

function fixture () {
  return '<?xml version="1.0" encoding="UTF-8"?><nfeProc versao="2.00" xmlns="http://www.portalfiscal.inf.br/nfe"><NFe xmlns="http://www.portalfiscal.inf.br/nfe"><infNFe versao="2.00" Id="NFe31060243816719000108550000000010001234567890"><ide><cUF>31</cUF><cNF>00000002</cNF><natOp>VENDA MERC.ADQ.SUBST.TRIB.</natOp><indPag>0</indPag><mod>55</mod><serie>0</serie><nNF>100</nNF><dEmi>2011-07-13</dEmi><dSaiEnt>2011-07-13</dSaiEnt><tpNF>1</tpNF><cMunFG>5700200</cMunFG><tpImp>1</tpImp><tpEmis>1</tpEmis><cDV>0</cDV><tpAmb>2</tpAmb><finNFe>1</finNFe><procEmi>0</procEmi><verProc>4.5.0.0</verProc></ide><emit><CNPJ>11111111111111</CNPJ><xNome>Empresa LTDA</xNome><xFant>Super Empresa</xFant><enderEmit><xLgr>RUA SAO GERONIMO</xLgr><nro>888</nro><xBairro>CENTRO</xBairro><cMun>5700200</cMun><xMun>SAO PAULO</xMun><UF>SP</UF><CEP>12500090</CEP><cPais>1058</cPais><xPais>Brasil</xPais><fone>99999991</fone></enderEmit><IE>ISENTO</IE><CRT>3</CRT></emit><dest><CNPJ>99999999000191</CNPJ><xNome>NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL</xNome><enderDest><xLgr>AV. MEDEIROS</xLgr><nro>999</nro><xBairro>CENTRO</xBairro><cMun>5702501</cMun><xMun>SAO JOSE</xMun><UF>SP</UF><CEP>12556000</CEP><cPais>1058</cPais><xPais>Brasil</xPais><fone>99999992</fone></enderDest><IE/></dest><det nItem="1"><prod><cProd>3</cProd><cEAN>0000000000000</cEAN><xProd>BISCOITO VITAMINADO</xProd><NCM>87089100</NCM><CFOP>5405</CFOP><uCom>UND</uCom><qCom>1.0000</qCom><vUnCom>140.0000000000</vUnCom><vProd>140.00</vProd><cEANTrib>0000000000000</cEANTrib><uTrib>UND</uTrib><qTrib>1.0000</qTrib><vUnTrib>140.0000000000</vUnTrib><indTot>1</indTot></prod><imposto><ICMS><ICMS10><orig>3</orig><CST>10</CST><modBC>0</modBC><vBC>14.63</vBC><pICMS>4.0000</pICMS><vICMS>0.59</vICMS><modBCST>4</modBCST><pMVAST>101.1100</pMVAST><vBCST>29.42</vBCST><pICMSST>18.0000</pICMSST><vICMSST>4.71</vICMSST></ICMS10></ICMS><IPI><cEnq>999</cEnq><IPITrib><CST>99</CST><vBC>140.00</vBC><pIPI>0.00</pIPI><vIPI>0.00</vIPI></IPITrib></IPI><PIS><PISAliq><CST>01</CST><vBC>140.00</vBC><pPIS>0.00</pPIS><vPIS>0.00</vPIS></PISAliq></PIS><COFINS><COFINSAliq><CST>01</CST><vBC>140.00</vBC><pCOFINS>0.00</pCOFINS><vCOFINS>0.00</vCOFINS></COFINSAliq></COFINS></imposto></det><det nItem="2"><prod><cProd>4</cProd><cEAN>0000000000010</cEAN><xProd>BISCOITO RECHEADO</xProd><NCM>34056700</NCM><CFOP>5405</CFOP><uCom>UND</uCom><qCom>1.0000</qCom><vUnCom>140.0000000000</vUnCom><vProd>140.00</vProd><cEANTrib>0000000000000</cEANTrib><uTrib>UND</uTrib><qTrib>1.0000</qTrib><vUnTrib>140.0000000000</vUnTrib><indTot>1</indTot></prod><imposto><ICMS><ICMS60><orig>0</orig><CST>60</CST><vBCSTRet>0.00</vBCSTRet><vICMSSTRet>0.00</vICMSSTRet></ICMS60></ICMS><IPI><cEnq>999</cEnq><IPITrib><CST>99</CST><vBC>140.00</vBC><pIPI>0.00</pIPI><vIPI>0.00</vIPI></IPITrib></IPI><PIS><PISAliq><CST>01</CST><vBC>140.00</vBC><pPIS>0.00</pPIS><vPIS>0.00</vPIS></PISAliq></PIS><COFINS><COFINSAliq><CST>01</CST><vBC>140.00</vBC><pCOFINS>0.00</pCOFINS><vCOFINS>0.00</vCOFINS></COFINSAliq></COFINS></imposto></det><total><ICMSTot><vBC>0.00</vBC><vICMS>0.00</vICMS><vBCST>0.00</vBCST><vST>0.00</vST><vProd>280.00</vProd><vFrete>0.00</vFrete><vSeg>0.00</vSeg><vDesc>0.00</vDesc><vII>0.00</vII><vIPI>0.00</vIPI><vPIS>0.00</vPIS><vCOFINS>0.00</vCOFINS><vOutro>0.00</vOutro><vNF>280.00</vNF></ICMSTot><ISSQNtot><vServ>100.00</vServ><vBC>100.00</vBC><vISS>2.00</vISS></ISSQNtot></total><transp><transporta><CNPJ>01234567000179</CNPJ><xNome>Transporte SA</xNome><IE>012345678</IE><xEnder>RUA DA TRANSPORTADORA</xEnder><xMun>SAO PAULO</xMun><UF>SP</UF></transporta><veicTransp><placa>ZZZ00001</placa><UF>PE</UF><RNTC>000000</RNTC></veicTransp><modFrete>0</modFrete><vol><qVol>1</qVol><esp>UNIDADE</esp><pesoL>22.001</pesoL><pesoB>22.000</pesoB><marca>DIVERSAS</marca><nVol>1,00</nVol></vol></transp><cobr><fat><nFat>00000002</nFat><vOrig>280.00</vOrig><vLiq>280.00</vLiq></fat><dup><nDup>59080/01</nDup><dVenc>2011-07-13</dVenc><vDup>280.00</vDup></dup></cobr><infAdic><infCpl>OBS:.</infCpl><infAdFisco>Imposto recolhido</infAdFisco><obsCont xCampo="ObsCont"><xTexto>*ICMS PAGO POR SUBST.TRIBUTARIA.</xTexto></obsCont><obsCont xCampo="ObsCont"><xTexto>*PROD. NAO INCIDEM PIS/COFINS CONF.LEI 10.147 DE 12/2000</xTexto></obsCont></infAdic></infNFe><Signature xmlns="http://www.w3.org/2000/09/xmldsig#"><SignedInfo><CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/><SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/><Reference URI="#NFe31060243816719000108550000000010001234567890"><Transforms><Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/><Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/></Transforms><DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><DigestValue>/dTxB2va1fii8ON+vsq6Me2VPCA=</DigestValue></Reference></SignedInfo><SignatureValue>xxxxxxxxx</SignatureValue><KeyInfo><X509Data><X509Certificate>yyyyyyy</X509Certificate></X509Data></KeyInfo></Signature></NFe><protNFe versao="2.00"><infProt Id="ID0000000000000001"><tpAmb>2</tpAmb><verAplic>SVRS20000000000</verAplic><chNFe>31060243816719000108550000000010001234567890</chNFe><dhRecbto>2011-07-20T15:49:31</dhRecbto><nProt>000000000000001</nProt><digVal>uuuuuuuuuuuuu</digVal><cStat>100</cStat><xMotivo>Autorizado o uso da NF-e</xMotivo></infProt></protNFe></nfeProc>'
}

module.exports.from = function (test) {
  var danfe = null
  var html = null
  var expectedNumero = 'Nº NFe: 100'

  // fromXML
  danfe = Danfe.fromXML(fixture())
  test.ok(danfe.toHtml())

  // fromNFe
  danfe = Danfe.fromNFe(NFe(fixture()))
  html = danfe.toHtml()
  test.ok(html)
  test.ok(html.indexOf(expectedNumero) !== -1)

  // fromFile
  try {
    fs.mkdirSync('tmp/')
  } catch (err) {

  }
  var pathTemp = fs.mkdtempSync('tmp/d') + '/file.xml'
  fs.writeFileSync(pathTemp, fixture())
  danfe = Danfe.fromFile(pathTemp)
  html = danfe.toHtml()
  test.ok(html)
  test.ok(html.indexOf(expectedNumero) !== -1)

  fs.writeFileSync(pathTemp + '.html', html)
  // fs.writeFileSync('tmp/html' + '.html', html)

  test.done()
}

module.exports.invalidFrom = function (test) {
  var invalidValues = ['', null, [], {}, 1]

  for (var value of invalidValues) {
    test.ifError(Danfe.fromXML(value).toHtml())

    test.ifError(Danfe.fromNFe(value).toHtml())

    test.ifError(Danfe.fromFile(value).toHtml())
  }

  test.done()
}

module.exports.customTemplate = function (test) {
	var expectedDefault = 'Nº NFe: 100'
	var expectedNumber = '<span>Nº: 100</span>'
	var expectedTitle = '<title>CUSTOM TEMPLATE</title>'

	var custom = __dirname + '/custom-template-test.hbs'
	var wrongCustom = __dirname + '/custom-template.hbs'

	var danfe = Danfe.fromXML(fixture())
	var html = danfe.toHtml(custom)

	// Deve conter o número da NF diferente do número do template default
	test.ok(html.indexOf(expectedNumber) !== -1)
	// Deve conter também o título com 'CUSTOM TEMPLATE'
	test.ok(html.indexOf(expectedTitle) !== -1)

	/**
	 * Enviando um arquivo inexistente, deve retornar o template padrão
	 */
	html = danfe.toHtml(wrongCustom)
	test.ok(
		html.indexOf(expectedDefault) !== -1,
		'Se enviar um caminho que não existe, deve retornar o template padrão'
	)

	/**
	 * Testando se mesmo depois de ter criado uma NF com o template customizado,
	 * ainda é capaz de criar outro com o template padrão.
	 */
	html = danfe.toHtml()
	test.ok(
		html.indexOf(expectedDefault) !== -1,
		'Se não enviar template customizado, deve retornar o padrão'
	)

	test.done()
}